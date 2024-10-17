// req.user -> role
// role -> data.access
const ccessSeed = require("../../prisma/seeder/access")
const AccessModel = require("../models/access")

const access = new AccessModel()

function rbac(menuParam, accessParam){
  return async (req, res, next) => {
    const roleId = req.user.roleId
    if(roleId === 1) return next()
      const accessByRole = await access.getOne({
    where:{
      role_id: roleId,
      grant: {
        path: [accessParam],
        equals: true,
      },
      menu: {
        is: {
          name: menuParam,
        },
      },
    },
   })
   console.log(accessByRole)
   if(!accessByRole) return next(new ValidationError('Forbidden'))
   return next()
  }
}

module.exports = rbac

