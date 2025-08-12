<template>
    <div class="container-fluid wraper">
        <h1 class="title">
            Vue3 组件间通信
        </h1>
        <hr>
        <div class="row">
            <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
                <!-- 导航区 -->
                <router-link active-class="active" to="/props" class="list-group-item">1.Props</router-link>
                <router-link active-class="active" to="/event" class="list-group-item">2.Event</router-link>
                <router-link active-class="active" to="/mitt" class="list-group-item">3.Bus</router-link>
                <router-link active-class="active" to="/model" class="list-group-item">4.Model</router-link>
                <router-link active-class="active" to="/attrs" class="list-group-item">5.AttrsListeners</router-link>
                <router-link active-class="active" to="/ref-parent" class="list-group-item">6.RefChildrenParent</router-link>
                <router-link active-class="active" to="/provide-inject" class="list-group-item">7.ProvideInject</router-link>
                <router-link active-class="active" to="/pinia" class="list-group-item">8.Pinia</router-link>
                <router-link active-class="active" to="/slot" class="list-group-item">9.Slot</router-link>

            </div>
            <div class="col-x5-9 col-md-9 col-lg-9 col-xl-9">
                <div class="panel-body">
                    <!-- 占位一个展示位 -->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>


</template>



<script setup lang="ts" name="App">
import 'bootstrap/dist/css/bootstrap.min.css';

</script>

<style></style>