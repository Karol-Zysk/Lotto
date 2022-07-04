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

export enum systemTypes {
  systemSix = 6,
  systemSeven = 7,
  systemEight = 8,
  systemNine = 9,
  systemTen = 10,
  systemEleven = 11,
  systemTwelve = 12,
}
