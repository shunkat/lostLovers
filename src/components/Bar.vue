<template>
  <div class="Bar--box">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
      class="mb-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        />
      </template>

      <v-app-bar-title>Today's Best Clothes?</v-app-bar-title>

      <v-spacer />

      <!--ハンバーガーメニューのボタン-->
      <div class="hamburger_btn" @click="ActiveBtn = !ActiveBtn">
        <span class="line line_01" :class="{ btn_line01: ActiveBtn }" />
        <span class="line line_02" :class="{ btn_line02: ActiveBtn }" />
        <span class="line line_03" :class="{ btn_line03: ActiveBtn }" />
      </div>
    </v-app-bar>

    <!--サイドバー-->
    <transition name="menu">
      <div v-show="ActiveBtn" class="menu">
        <ul>
          <li>
            <a href="#weather" style="color:black" @click="OffActiveBtn"
              >Today's weather</a
            >
          </li>
          <li>
            <a href="#cloth" style="color:black" @click="OffActiveBtn"
              >Today's best clothes?</a
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ActiveBtn: false,
    };
  },
  methods: {
    OffActiveBtn: function() {
      this.ActiveBtn = false;
    },
  },
};
</script>

<style>
.bar--box {
  margin-bottom: 4rem;
  position: fixed;
}
/*ボタン*/
.hamburger_btn {
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  right: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 50;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 32px;
  height: 2px;
  background: #ffffff;
  text-align: center;
}

.hamburger_btn .line_01 {
  top: 16px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 26px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 36px;
  transition: 0.4s ease;
}

.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

/*サイドバー*/
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
.menu-leave,
.menu-enter-to {
  opacity: 1;
}

.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}
.menu {
  background-color: rgba(197, 197, 197, 0.671);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 25rem;
  height: 80rem;
  top: 0;
  right: 0;
}
.menu a {
  text-decoration: none;
  font-size: 2rem;
  padding: 0 2rem;
}
.menu ul {
  margin: 1rem;
  padding: 0;
}
</style>
