import { createApp } from 'vue'
import App from './App.vue'
import VideoPlayer from './components/VideoPlayer.vue'

const app = createApp(App)
app.use(VideoPlayer)
app.mount('#app')
