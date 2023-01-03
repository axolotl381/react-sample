import { AiFillHome, AiFillMail, AiFillSetting } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export const SideBarData = [
  { title: "ホーム", icon: <AiFillHome />, link: "/" },
  { title: "メール", icon: <AiFillMail />, link: "/mail" },
  { title: "設定", icon: <AiFillSetting />, link: "/setting" },
  {
    title: "テストページ",
    icon: <AiOutlineExclamationCircle />,
    link: "/test",
  },
];
