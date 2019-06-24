export const APP_NAME = "iConsole";
export const APP_LOG_MAX_LINE = 5000;
export const APP_HELPER_STATUS_CODE_URL = "https://developer.mozilla.org/ko/docs/Web/HTTP/Status/%query%";

/**
 * WebSocket Settings
 */
export const WS_CONNECT_PROTOCOL = 'ws'
export const WS_CONNECT_HOST = 'localhost'
export const WS_CONNECT_PORT = 8999
export const WS_CONNECT_PATH = '/'

/**
 * 사이드바 상수 선언
 */
export const SO_TYPE_CMD = 'cmd'
export const SO_TYPE_LINK = 'link'
export const TERMINAL_AUTO_CLOSE = 1400 // milliseconds

export const SIDEBAR_EXECUTION_LIST = [
  {
    type       : SO_TYPE_CMD,
    namespace  : "vagrant.inven.krapp",
    description: "Sync Nginx Config",
    command    : "isync"
  },
  {
    type       : SO_TYPE_CMD,
    namespace  : "vagrant.inven.krapp",
    description: "Reload Nginx",
    command    : "reloadall"
  },
  {
    type       : SO_TYPE_CMD,
    namespace  : "vagrant.inven.krapp",
    description: "Profile On",
    command    : "profileon"
  },
  {
    type       : SO_TYPE_CMD,
    namespace  : "vagrant.inven.krapp",
    description: "Profile Off",
    command    : "profileoff"
  },
  {
    type       : SO_TYPE_CMD,
    namespace  : "vagrant.inven.krapp",
    description: "Edit .env",
    command    : "dotenv"
  },
  {
    type       : SO_TYPE_LINK,
    namespace  : "browser.blank",
    description: "iConsole Repo",
    command    : "gitlab-iconsole",
    link       : "https://git.inven.co.kr/byzz/krapp-web"
  },
  {
    type       : SO_TYPE_LINK,
    namespace  : "browser.blank",
    description: "Shell Repo",
    command    : "gitlab-shell",
    link       : "https://git.inven.co.kr/byzz/krapp-shell"
  }
]