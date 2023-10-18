import { Router } from "express";
import VisitorsControllers from "../controllers/Visitors.controller";
import { Joi, Segments, celebrate } from "celebrate";

const visitorRoutes = Router();
const visitorsControllers = new VisitorsControllers();

visitorRoutes.get("/", visitorsControllers.index);

visitorRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
    },
  }),
  visitorsControllers.create,
);

visitorRoutes.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  visitorsControllers.delete,
);

visitorRoutes.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().optional(),
      email: Joi.string().optional(),
      phone: Joi.string().optional(),
    },
  }),
  visitorsControllers.update,
);

export default visitorRoutes;
