// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "高中笔记：状态页",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://classnote.top', label: '高中笔记' },
    { link: 'https://quiz.classnote.top/', label: '高中题库' },
  ],
  customFooter: `
  <div style="text-align: center; margin-top: 20px; opacity: 0.85;">
    <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    ">
      <span style="font-weight: 600;">Powered by</span>

      <!-- 你的 logo.svg -->
      <img src="/logo.svg" alt="logo" style="height: 28px;" />

      <!-- Cloudflare SVG -->
      <svg width="100" height="34" viewBox="0 0 100 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M84.7738 21.2478L85.0181 20.4047C85.3094 19.4016 85.201 18.4745 84.7125 17.7932C84.2628 17.1658 83.5136 16.7963 82.6037 16.7533L65.3701 16.5357C65.3167 16.5346 65.2642 16.5211 65.217 16.496C65.1697 16.471 65.1291 16.4352 65.0983 16.3916C65.0681 16.3465 65.0489 16.2951 65.0421 16.2413C65.0354 16.1875 65.0413 16.1329 65.0595 16.0818C65.089 15.9975 65.1427 15.9238 65.2139 15.8696C65.285 15.8154 65.3705 15.7832 65.4598 15.777L82.8531 15.557C84.9164 15.4625 87.1502 13.7929 87.9323 11.7569L88.9242 9.17216C88.9648 9.06287 88.9741 8.94444 88.951 8.83018C87.8248 3.778 83.3035 0 77.8977 0C72.917 0 68.6878 3.20598 67.1709 7.66212C66.1458 6.89481 64.8679 6.54207 63.593 6.67454C61.2035 6.91117 59.2823 8.8298 59.0458 11.2132C58.9851 11.8083 59.0295 12.4094 59.1771 12.9893C55.2737 13.1028 52.1432 16.2921 52.1432 20.2126C52.1437 20.5626 52.1697 20.9121 52.2209 21.2583C52.2321 21.3383 52.2719 21.4115 52.3328 21.4647C52.3938 21.5179 52.4719 21.5475 52.5529 21.548L84.3692 21.5518C84.3722 21.552 84.3751 21.552 84.3781 21.5518C84.4681 21.5503 84.5552 21.5199 84.6264 21.4651C84.6977 21.4104 84.7494 21.3342 84.7738 21.2478Z" fill="#F6821F"/><path d="M90.5148 9.35962C90.3551 9.35962 90.196 9.36362 90.0375 9.37162C90.012 9.37345 89.9869 9.37893 89.963 9.38789C89.9214 9.40205 89.8839 9.42604 89.8537 9.45781C89.8234 9.48958 89.8014 9.52818 89.7894 9.5703L89.1117 11.9045C88.8204 12.9076 88.9288 13.834 89.4177 14.5152C89.867 15.1434 90.6162 15.5121 91.5261 15.5551L95.1999 15.7751C95.2516 15.7768 95.3022 15.7905 95.3476 15.8151C95.393 15.8397 95.4321 15.8745 95.4617 15.9168C95.4922 15.9621 95.5115 16.0139 95.5183 16.0681C95.525 16.1222 95.5189 16.1772 95.5005 16.2286C95.4709 16.3127 95.4173 16.3863 95.3463 16.4404C95.2753 16.4946 95.19 16.5269 95.1009 16.5334L91.2837 16.7533C89.2111 16.8486 86.9777 18.5174 86.1963 20.5534L85.9206 21.2722C85.909 21.3023 85.9048 21.3346 85.9083 21.3666C85.9117 21.3986 85.9228 21.4294 85.9405 21.4563C85.9582 21.4831 85.9821 21.5055 86.0102 21.5213C86.0382 21.5372 86.0697 21.5462 86.1019 21.5476C86.1054 21.5476 86.1085 21.5476 86.112 21.5476H99.2469C99.3233 21.5483 99.3978 21.524 99.459 21.4785C99.5203 21.4329 99.5648 21.3687 99.586 21.2955C99.8188 20.4674 99.9364 19.6114 99.9355 18.7514C99.9339 13.5648 95.7168 9.35962 90.5148 9.35962Z" fill="#FBAD41"/><path d="M11.1228 25.4294H13.3636V31.5342H17.2794V33.492H11.1228V25.4294Z" fill="#DDDDDD"/><path d="M19.6002 29.4839V29.4611C19.6002 27.1458 21.4713 25.2679 23.9661 25.2679C26.4609 25.2679 28.3087 27.1226 28.3087 29.4378V29.4611C28.3087 31.7763 26.4372 33.6531 23.9432 33.6531C21.4492 33.6531 19.6002 31.7991 19.6002 29.4839ZM26.0217 29.4839V29.4611C26.0217 28.2992 25.1789 27.2837 23.9432 27.2837C22.7187 27.2837 21.8985 28.2744 21.8985 29.4378V29.4611C21.8985 30.6229 22.7416 31.638 23.9661 31.638C25.2018 31.638 26.0217 30.6473 26.0217 29.4839Z" fill="#DDDDDD"/><path d="M31.0513 29.956V25.429H33.3266V29.9103C33.3266 31.0722 33.9158 31.6264 34.8164 31.6264C35.717 31.6264 36.3061 31.0966 36.3061 29.9677V25.429H38.5818V29.8972C38.5818 32.5005 37.0921 33.6403 34.7934 33.6403C32.4948 33.6403 31.0513 32.4784 31.0513 29.9549" fill="#DDDDDD"/><path d="M42.011 25.4297H45.1295C48.0173 25.4297 49.6919 27.0881 49.6919 29.4146V29.4382C49.6919 31.7642 47.994 33.4923 45.0836 33.4923H42.011V25.4297ZM45.1644 31.5102C46.5046 31.5102 47.3932 30.7743 47.3932 29.4711V29.4483C47.3932 28.1586 46.5046 27.4096 45.1644 27.4096H44.2518V31.511L45.1644 31.5102Z" fill="#DDDDDD"/><path d="M52.9486 25.4294H59.4163V27.3879H55.1894V28.7581H59.0124V30.6125H55.1894V33.492H52.9486V25.4294Z" fill="#DDDDDD"/><path d="M62.5343 25.4294H64.7751V31.5342H68.6909V33.492H62.5343V25.4294Z" fill="#DDDDDD"/><path d="M74.5461 25.3717H76.7054L80.1478 33.492H77.7454L77.1559 32.052H74.037L73.4599 33.492H71.1038L74.5461 25.3717ZM76.5093 30.3131L75.6083 28.0208L74.6956 30.3131H76.5093Z" fill="#DDDDDD"/><path d="M83.0339 25.429H86.8569C88.0934 25.429 88.9474 25.752 89.4903 26.3047C89.9645 26.7655 90.2068 27.3891 90.2068 28.1826V28.2055C90.2068 29.4375 89.5466 30.2554 88.5435 30.6814L90.4725 33.4924H87.8845L86.2561 31.0501H85.2747V33.4924H83.0339V25.429ZM86.7532 29.2996C87.5155 29.2996 87.9548 28.9309 87.9548 28.3434V28.3205C87.9548 27.6869 87.4926 27.3647 86.7412 27.3647H85.2747V29.3011L86.7532 29.2996Z" fill="#DDDDDD"/><path d="M93.4399 25.4294H99.9422V27.3302H95.6578V28.5505H99.5387V30.3131H95.6578V31.5919H100V33.492H93.4399V25.4294Z" fill="#DDDDDD"/><path d="M6.21677 30.4289C5.90298 31.1364 5.24278 31.6376 4.36549 31.6376C3.14062 31.6376 2.29789 30.6241 2.29789 29.4607V29.4374C2.29789 28.2755 3.11771 27.2833 4.34219 27.2833C5.2653 27.2833 5.96823 27.8495 6.26493 28.6198H8.6269C8.24864 26.7008 6.55775 25.2682 4.36549 25.2682C1.87031 25.2682 0 27.1474 0 29.4607V29.4835C0 31.7987 1.8474 33.6538 4.34219 33.6538C6.47619 33.6538 8.14417 32.2759 8.58418 30.4293L6.21677 30.4289Z" fill="#DDDDDD"/></svg>
      </svg>
    </div>

    <p style="font-size: 12px; margin-top: 8px; opacity: 0.6;">
      Open-source monitoring and status page powered by Uptimeflare, customized by 家猫.
    </p>
  </div>
  `,
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'classnote_main',
      // `name` is used at status page and callback message
      name: '高中笔记',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://classnote.top/note/%E9%A6%96%E9%A1%B5',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: '高中笔记主站',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://classnote.top/note/%E9%A6%96%E9%A1%B5',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 8000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
//        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent (require POST/PUT/PATCH method)
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      // responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://`, `globalping://` and `http(s)://` proxies
      // checkProxy: 'worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      // checkProxyFallback: true,
    },
    {
      id: 'classnote_quiz',
      name: '高中题库',
      method: 'GET',
      target: 'https://quiz.classnote.top/page/%E9%A6%96%E9%A1%B5',
      tooltip: '题库子站',
      statusPageLink: 'https://quiz.classnote.top/page/%E9%A6%96%E9%A1%B5',
      expectedCodes: [200],
      timeout: 8000,
    }
  ],
  // [Optional] Notification settings
//  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
//    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
//      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
//      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
//      payload: {
//        chat_id: 12345678,
//        text: '$MSG',
//      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
//      timeout: 10000,
//    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
//    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
//    gracePeriod: 5,
//  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
//  {
    // [Optional] Monitor IDs to be affected by this maintenance
//    monitors: ['foo_monitor', 'bar_monitor'],
    // [Optional] default to "Scheduled Maintenance" if not specified
//    title: 'Test Maintenance',
    // Description of the maintenance, will be shown at status page
//    body: 'This is a test maintenance, server software upgrade',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
//    start: '2020-01-01T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
//    end: '2050-01-01T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
//    color: 'blue',
//  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
