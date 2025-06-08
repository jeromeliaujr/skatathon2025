<script setup>
import { defineProps } from 'vue'

defineProps({
  fblink: {
    type: String,
    default: 'https://www.instagram.com/smuskatathon/',
  },
  instalink: {
    type: String,
    default: 'https://www.instagram.com/smuskatathon/',
  },
  link1: {
    type: String,
    default: 'GUIDE',
  },
  link2: {
    type: String,
    default: 'RACES',
  },
  link3: {
    type: String,
    default: 'SPONSORS',
  },
  link4: {
    type: String,
    default: 'FAQ',
  },
  link5: {
    type: String,
    default: 'REGISTER NOW',
  },
})
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <!-- <div class="navbar bg-base-300 shadow-sm fixed top-0 left-0 w-full z-30"> -->
    <div class="navbar-start">
      <!-- Mobile Dropdown -->
      <div class="dropdown">
        <!-- Hamburger Icon (visible on small screens) -->
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <!-- Mobile Menu Items (Submenu Removed) -->
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <RouterLink :to="{ hash: '#guide' }">{{ link1 }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ hash: '#category' }">{{ link2 }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ hash: '#sponsor' }">{{ link3 }}</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ hash: '#faq' }">{{ link4 }}</RouterLink>
          </li>
        </ul>
      </div>
      <!-- Brand/Logo -->
      <!-- <a class="btn btn-ghost text-xl font-varsity">SKATATHON 2025</a> -->
      <button class="btn-xl	btn-circle">
        <img src="src/img/logo.PNG" />
      </button>
    </div>

    <!-- Desktop Menu (hidden on small screens, visible on large) -->
    <nav class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="#guide" class="text-xl font-varsity">{{ link1 }}</RouterLink>
        </li>
        <li>
          <RouterLink to="#category" class="text-xl font-varsity">{{ link2 }}</RouterLink>
        </li>
        <li>
          <RouterLink to="#sponsor" class="text-xl font-varsity">{{ link3 }}</RouterLink>
        </li>
        <li>
          <RouterLink to="#faq" class="text-xl font-varsity">{{ link4 }}</RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Navbar End Section -->
    <div class="navbar-end">
      <a class="btn btn-secondary text-lg font-varsity">{{ link5 }}</a>
    </div>
  </div>
</template>
