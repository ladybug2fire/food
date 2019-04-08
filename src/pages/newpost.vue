<template>
  <div>
    <div>
      <my-bread-crumb :routes="routes"/>
      <el-form
        size="small"
        :model="form"
        ref="form"
        label-width="100px"
        class="profile-edit"
      >
        <el-form-item label="菜名" prop="foodname">
          <el-input v-model="form.foodname"></el-input>
        </el-form-item>
        <el-form-item label="头图">
          <my-upload :model="form" prop="picUrl" />
        </el-form-item>
        <el-form-item label="难度" prop="diffculty">
          <el-radio-group v-model="form.diffculty">
            <el-radio label="困难"></el-radio>
            <el-radio label="容易"></el-radio>
            <el-radio label="一般"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- <el-form-item label="标签" prop="region">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="制作时长" prop="cookTime">
          <el-input v-model="form.cookTime" placeholder="制作时长"></el-input>
        </el-form-item>
        <el-form-item label="准备时长" prop="prepareTime">
          <el-input v-model="form.prepareTime" placeholder="准备时长"></el-input>
        </el-form-item>
        <el-form-item label="预计成本" prop="price">
          <el-input v-model="form.price" placeholder="预计成本">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="材料" prop="delivery">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <!-- <el-form-item label="步骤" prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->
        <el-form-item label="简介" prop="desc">
          <el-input type="textarea" v-model="form.desc" placeholder="简介"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">确认修改</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/**
 * 新建菜谱
 */
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import myUpload from "@/components/UploadField.vue"
import { addFood } from "@/api/food"
export default {
  components: {
    myBreadCrumb,
    myUpload
  },
  data() {
    return {
      routes: [
        { name: "首页", url: "/home" },
        { name: "个人中心", url: "/profile" },
        { name: "新建菜谱" }
      ],
      form: {
        foodname: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
    };
  },
  methods: {
    submitForm(formName) {
      addFood(this.form).then(res=>{
        console.log(res);
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

  }
};
</script>

<style lang="less" scoped>
.profile-edit {
  width: 50vw;
  text-align: left;
}
</style>