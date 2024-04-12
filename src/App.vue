<template>
  <div class="container">
    <h1>计算机开发从业者信息表</h1>
    <form action="" id="userForm">
      <el-input v-for="item of inputConfigs" :key="item.id" :id="item.id" :name="item.name" :type="item.type"
        :placeholder="item.placeholder" :label="item.label">
      </el-input>

      <el-radio label="性别" name="gender" :radios="radioConfigs">

      </el-radio>

      <el-select label="职业" name="occupation" :options="optionConfigs"></el-select>

      <el-checkbox label="语言学习" name="learning" :checks="checkConfigs">

      </el-checkbox>

      <el-textarea label="自我介绍" name="intro" id="intro" placeholder="请输入自我介绍" :colNum='20' :rowNum='5'>

      </el-textarea>

      <el-button id="submitBtn" type="submit" :disabled="true">提交</el-button>


    </form>
  </div>
</template>

<script setup>

import { onMounted, reactive } from 'vue';
import { createForm } from './formCheck';

import formRegular from './formRegular.js'

import { inputConfigs, radioConfigs, optionConfigs, checkConfigs } from './components/config';

import {
  ElInput, ElRadio, ElSelect, ElCheckbox, ElTextarea, ElButton
} from './libs/element-ui/'



const state = reactive({
  realname: '',
  nickname: '',
  idnumber: '',
  gender: '',
  occupation: '',
  learning: [],
  intro: ''
})

onMounted(() => {
  createForm(formRegular, state);
})

</script>

<style lang="scss">
h1 {
  font-weight: normal;
}

.container {
  width: 500px;
  margin: 0 auto;

  .form-element {
    padding: 15px 0;

    .inputText {
      border: 2px solid #ccc;
      border-radius: 4px;
      padding: 8px 12px;
      font-size: 16px;

      &:focus {
        outline: none;
      }
    }

    select {
      border: 2px solid #ccc;
      border-radius: 4px;
      padding: 8px 12px;
      font-size: 16px;
    }
  }

  .warn {
    color: red;
    font-size: 14px;

  }

  label {
    display: inline-block;
    width: 100px;

  }

  .fa {
    display: none;
    color: green;
  }
}
</style>
