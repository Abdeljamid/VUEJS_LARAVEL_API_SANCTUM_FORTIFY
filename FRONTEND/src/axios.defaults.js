// Configurer l'URL de base pour toutes les requêtes
axios.defaults.baseURL = "http://localhost:8000/";
// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
// axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// Définir des en-têtes par défaut pour toutes les requêtes
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

//Permet l'envoie des cookies lors des requetes cross-domain
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

// Exporter axios pour l'utiliser dans vos composants
export default axios;
