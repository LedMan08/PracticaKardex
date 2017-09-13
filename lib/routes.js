//import { Busqueda } from "../lib/collections/collections";
FlowRouter.route("/", {
	name: "PagInicio",
	action(){
		BlazeLayout.render("KardexPrincipal");
	}
});
