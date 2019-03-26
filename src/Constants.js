/**
 * 사이드바 상수 선언
 */
export const SIDEBAR_EXECUTION = [
  {
    namespace  : "vagrant.inven.krapp",
    description: "Sync Nginx Config",
    command    : "isync"
  },
  {
    namespace  : "vagrant.inven.krapp",
    description: "Reload Nginx",
    command    : "reloadall"
  },
  {
    namespace  : "vagrant.inven.krapp",
    description: "Profile On",
    command    : "profileon"
  },
  {
    namespace  : "vagrant.inven.krapp",
    description: "Profile Off",
    command    : "profileoff"
  },
  {
    namespace  : "vagrant.inven.krapp",
    description: ".env",
    command    : "dotenv"
  },
  {
    namespace  : "browser.blank",
    description: "iConsole Repo",
    command    : "gitlab-iconsole",
    link       : "https://git.inven.co.kr/byzz/krapp-web"
  },
  {
    namespace  : "browser.blank",
    description: "Shell Repo",
    command    : "gitlab-shell",
    link       : "https://git.inven.co.kr/byzz/krapp-shell"
  }
];