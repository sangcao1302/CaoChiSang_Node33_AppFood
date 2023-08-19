import sequelize from '../Models/index.js';
import initModels from '../Models/init-models.js';
const model=initModels(sequelize)
// Danh Sách User Like
const getUserLike=async(req,res)=>{   
      let data = await model.like_res.findAll({
            include: [
                  {model:model.user, attributes:['full_name'],as:"user"},
                  {model:model.restaurant , attributes:["res_name"],as:"re"},
                    
              ]
      })
      res.send(data)
}
// Thêm User Like
const createUserLike = async (req, res) => {
      try {
            let { user_id,res_id,date_like } = req.body;

          let newData = {
              user_id,
              res_id,
              date_like
          };
          await model.like_res.create(newData);
          res.send("thêm mới thành công !");
      }
      catch (exp) {
          console.log(exp);
          res.status(500).send("Lỗi BE");
      }
  }
  // Xóa User Like
  const deleteUserLike = async (req, res) => {
      try{
            let { user_id,res_id } = req.body;
  
            // DELETE FROM user WHERE user_id = ... ;
            await model.like_res.destroy({ where: { user_id: user_id,res_id:res_id } });
            res.send("Xóa thành công !");
        
      }
      catch(exp){
            console.log(exp);
            res.status(500).send("Lỗi BE");
      }
   
  }
  // Danh sách User Rate
const getUserRate=async(req,res)=>{   
      let data = await model.rate_res.findAll({
            include: [
                  {model:model.user, attributes:['full_name'],as:"user"},
                  {model:model.restaurant , attributes:["res_name"],as:"re"},
                    
              ]
      })
      res.send(data)
}
 // Thêm User Rate
const createUserRate = async (req, res) => {
      try {
            let { user_id,res_id,amount, date_rate } = req.body;

          let newData = {
              user_id,
              res_id,
              amount,
              date_rate
          };
          await model.rate_res.create(newData);
          res.send("thêm mới thành công !");
      }
      catch (exp) {
          console.log(exp);
          res.status(500).send("Lỗi BE");
      }
  }
   // Thêm User Order
  const createUserOrder = async (req, res) => {
      try {
            let { user_id,food_id,amount,code,arr_sub_id } = req.body;

          let newData = {
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id 
          };
          await model.order.create(newData);
          res.send("thêm mới thành công !");
      }
      catch (exp) {
          console.log(exp);
          res.status(500).send("Lỗi BE");
      }
  }
  //Lọc User Order theo user id
  const getUserOrder = async (req, res) => {
      try {
            let { user_id } = req.params;

            let data = await model.order.findAll({
                  where:{user_id:user_id},
                  include: [
                        {model:model.user, attributes:['full_name'],as:"user"},    
                    ]
            })
            res.send(data)
          
         
      }
      catch (exp) {
          console.log(exp);
          res.status(500).send("Lỗi BE");
      }
  }
export { getUserLike ,getUserRate ,createUserRate,createUserLike,deleteUserLike,createUserOrder,getUserOrder}
