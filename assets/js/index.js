import Vue from 'vue';
import panel from './components/panel.vue';
import login_form from './components/login_form.vue';

var vue = new Vue({
	el : '#app',
	data : ()=>{
		return {}
	},
	components : {
		'panel' : panel,
		'login-form' : login_form
	}
});