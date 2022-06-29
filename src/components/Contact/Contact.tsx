import React from "react";
import axios from "axios";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormTextArea,
} from "./Contact.style";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { notificationEmitter } from "../../utils/notifications";

const Contact = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);

  const handleSend = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await axios
        .post("http://localhost:4000/api/send_mail", {
          text,
          email,
          topic,
        })
        .then((data) => {
          setSent(true);
        });
    } catch (error) {
      setErrorMessage(
        error +
          " sprawdź połączenie internetowe lub skontaktuj się z zysk.karol.pawel@gmail.com"
      );
      setIsSending(false);
      setErr(true);
      notificationEmitter(errorMessage);
    }
  };

  return (
    <Container>
      <ToastContainer
        toastStyle={{
          backgroundColor: "blue",
          fontSize: "0.9rem",
          marginTop: "4.5rem",
          fontWeight: "bold",
          color: "yellow !important",
        }}
      />
      <FormWrap>
        <Icon to="/">Lotto Symulator</Icon>
        <FormContent>
          {!sent ? (
            <Form onSubmit={handleSend}>
              <FormH1>Skontaktuj się</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                placeholder="email@gmail.com"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              ></FormInput>
              <FormLabel htmlFor="for">Temat</FormLabel>
              <FormInput
                placeholder="temat wiadomości"
                type="text"
                value={topic}
                required
                onChange={(e) => setTopic(e.target.value)}
              ></FormInput>
              <FormLabel htmlFor="for">Treść...</FormLabel>
              <FormTextArea
                placeholder="..."
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></FormTextArea>
              <FormButton type="submit">
                {isSending ? "Wysyłam" : "Wyślij"}
              </FormButton>
            </Form>
          ) : (
            <h1>{err ? errorMessage : "Email Sent"}</h1>
          )}
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Contact;
