import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { param2Obj } from '@/utils'
import { setToken, getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  const hrefObj = param2Obj(window.location.href)

  if (hrefObj.token) {
    setToken('', hrefObj.token)
    setToken('username', hrefObj.username)
    window.location.href = '/#/dashboard'
  }
  // set page title
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()
  if (hasToken) {
    next()
  } else {
    window.location.href = `http://log-ops.ezrpro.cn/#/login?returnUrl=${window.location.origin}`
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
