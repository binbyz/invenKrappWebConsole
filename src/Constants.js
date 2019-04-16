export const APP_NAME = "iConsole";
export const APP_LOG_MAX_LINE = 5000;
export const APP_HELPER_STATUS_CODE_URL = "https://developer.mozilla.org/ko/docs/Web/HTTP/Status/%query%";

/**
 * WebSocket Settings
 */
export const WS_CONNECT_PROTOCOL = 'ws';
export const WS_CONNECT_HOST = 'localhost';
export const WS_CONNECT_PORT = 8999;
export const WS_CONNECT_PATH = '/';

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
    description: "Edit .env",
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