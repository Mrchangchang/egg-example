const {Controller} = require('egg')

class BaseController extends Controller{
    success (data) {
        this.ctx.body = {
            success: true,
            message: '',
            data
        }
    }

    notFound (msg) {
        msg = msg || 'not find'
        this.ctx.throw(404, msg)
    }
}

module.exports = BaseController