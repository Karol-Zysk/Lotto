export type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};
export type NavbarProps = {
  toggle: () => void;
};

export type ArrowType = {
  path: string;
  text: string;
};

export type LikeProps = {
  isLiked: boolean;
  likeCounter: number;
  isLoading: boolean;
  leaveLike: () => Promise<void>;
};



