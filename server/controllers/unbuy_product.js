import Users from "../db/Models/User";
import Products from "../db/Models/Products";

export const UnbuyAPI=async (req,res)=>{
    try {
        const uid=req.params.uid;
        const id=req.params.id;  //url parameters id
        const userData=await Users.findById(uid)
        const product=await Products.findById(id)
        const index = userData.ads.indexOf(id);
        if (index > -1) { // only splice array when item is found
            userData.ads.splice(index, 1); // 2nd parameter means remove one item only
        }
        await userData.save()
        // console.log(userData.ads)
        res.status(200).json({ad:product,user:userData});


res.status(200)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).json(`${error.message}!!`)
    }
}