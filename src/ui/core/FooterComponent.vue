<template>
  <footer class="footer-container">
    <div class="footer-grid">
      <div class="footer-column">
        <img class="brand-logo" src="@/assets/icons/EstadoLimpioLogo.webp" alt="Logo Estado Limpio">
        <div class="footer-description">
          <p>&copy; 2025 Estado Limpio. Todos los derechos reservados.</p>
        </div>
      </div>

      <div class="footer-column">
        <h3>Compañía</h3>
        <ul>
          <li><RouterLink to="/about">About us</RouterLink></li>
          <li><RouterLink to="/about">Blog</RouterLink></li>
          <li><RouterLink to="/about">Contact us</RouterLink></li>
          <li><RouterLink to="/about">Pricing</RouterLink></li>
          <li><RouterLink to="/about">Testimonials</RouterLink></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Contacto</h3>
        <ul>
          <li><RouterLink to="/about">Help center</RouterLink></li>
          <li><RouterLink to="/about">Terms of service</RouterLink></li>
          <li><RouterLink to="/about">Legal</RouterLink></li>
          <li><RouterLink to="/about">Privacy policy</RouterLink></li>
          <li><RouterLink to="/about">Status</RouterLink></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Manténgase informado</h3>
        <div class="subscribe-box">
          <input type="email" placeholder="Introduce tu Correo" />
          <button>Suscripción</button>
          <div>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SocialMediaIcons from '@/ui/landing/components/SocialMediaIcons.vue';
</script>

<style scoped>
.footer-container {
  background: #263238;
  color: #F5F7FA;
  padding: 64px 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-description p {
  font-size: 14px;
  line-height: 20px;
}

.footer-column h3 {
  color: white;
  font-size: 20px;
  font-weight: 600;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column a {
  color: #F5F7FA;
  font-size: 14px;
  text-decoration: none;
}

.footer-column a:hover {
  text-decoration: underline;
}

.subscribe-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.subscribe-box input {
  width: 100%;
  max-width: 400px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #D9DBE1;
  padding: 6px 10px;
  font-size: 14px;
}

.subscribe-box button {
  padding: 8px 16px;
  background: #34A853;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .footer-column {
    align-items: center;
    text-align: center;
  }
}
</style>
