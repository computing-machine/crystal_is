let express=require("express");
let FinishedGoodApi=require("../REST/inventory/routers/finished_good_api");
let RawMaterialApi=require("../REST/inventory/routers/raw_material_api");
let IntermediaryApi=require("../REST/inventory/routers/intermediary_api");
let ProductionJobApi=require("../REST/inventory/routers/production_job_api");
let UnitApi=require("../REST/inventory/routers/ unit_api");
let BomApi=require("../REST/inventory/routers/bom_api");
let PurchaseHistoryApi=require("../REST/inventory/routers/purchase_history_api");
let NonProcessLineItemApi=require("../REST/inventory/routers/non_process_line_item_api");

let router=express.Router();

router.use("/FinishedGoodApi", FinishedGoodApi);
router.use("/RawMaterialApi", RawMaterialApi);
router.use("/IntermediaryApi", IntermediaryApi);
router.use("/ProductionJobApi", ProductionJobApi);
router.use("/UnitApi", UnitApi);
router.use("/BomApi", BomApi);
router.use("/PurchaseHistoryApi", PurchaseHistoryApi);
router.use("/NonProcessLineItemApi", NonProcessLineItemApi);

module.exports=router;