<script setup>
import { ref } from "vue";
import { loginUser } from "@/services/authService";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const response = await loginUser({
      username: username.value,
      password: password.value,
    });
    localStorage.setItem("role", response.role);
    router.push("/dashboard");
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <input v-model="username" placeholder="Username" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
</template>
