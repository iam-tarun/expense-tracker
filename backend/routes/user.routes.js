import { Router } from 'express';

const router = Router();

// Define the routes and map them to controller functions
router.get('/', function (req, res) {
   res.send({message: "success"}).status(200);
   return
})

export default router;
