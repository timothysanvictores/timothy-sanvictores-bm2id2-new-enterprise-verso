import { createClient } from "https://esm.sh/@supabase/supabase-js";

// NOTE: do not do this in a production environment

const SUPABASE_URL = "https://attrumenwtfaezhzkhkx.supabase.co";
const SUPABASE_KEY = "sb_publishable_TDn7FVN7A_54GDCr9d9cWQ_PE10bSMs";

const superbase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function getProjectName(id) {
	const { data } = await superbase.from("projects").select("*").order("created_at", {
		ascending: false,
	});

	data.forEach((project) => {
		if (project.id == id) {
			console.log(project.id);
			console.log(project.name);
			document.getElementById(id.toString()).innerHTML = `${project.name}`;
		}
	});
}

document.addEventListener("DOMContentLoaded", function () {
	getProjectName(1);
	getProjectName(2);
});
