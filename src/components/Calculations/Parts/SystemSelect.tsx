import React from "react";
import { systemTypes } from "../../../../type";
import { Flex, HitPrice, Label, Option, Select } from "../Calculations.style";

type Props = {
  setSystem: React.Dispatch<React.SetStateAction<systemTypes>>;
  price: number;
};

const SystemSelect: React.FC<Props> = ({ setSystem, price }) => {
  return (
    <>
      <Label htmlFor="SYSTEM">Wybierz system</Label>
      <Flex>
        <Select
          onChange={(e) => {
            setSystem(parseInt(e.target.value));
          }}
          name="systemSelect"
          id="system"
          form="System"
        >
          <Option value={6}>Bez Systemu</Option>
          <Option value={7}>System 7</Option>
          <Option value={8}>System 8</Option>
          <Option value={9}>System 9</Option>
          <Option value={10}>System 10</Option>
          <Option value={11}>System 11</Option>
          <Option value={12}>System 12</Option>
        </Select>
        <HitPrice>Cena Losu: {price} zł</HitPrice>
      </Flex>
    </>
  );
};

export default SystemSelect;
