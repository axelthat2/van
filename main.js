import * as Sentry from "@sentry/browser"
import { BrowserTracing } from "@sentry/tracing"
import { Apple } from "./apple"
import "./style.css"

Sentry.init({
  dsn: "https://c39265164cb34e148a5d73a138271d94@o1098027.ingest.sentry.io/6250696",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

new Apple().add()
