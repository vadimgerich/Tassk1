import Photo from "./model"

const photoControler = {

    async getByComment(req,res){
        function makeQueryObject(query){
            let result = {};        
            if (query){
                result.comment = {"$in":(query)};
            }   
            return result; 
        }
        try {
            const list = await Photo.find(makeQueryObject(req.params.comment));
            response.send(list);
        }
            catch(error){
            response.status(500).send(error);
        }
    },
}

export default photoControler;