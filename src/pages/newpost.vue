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
        <el-form-item label="菜名" prop="foodname" required>
          <el-input v-model="form.foodname"></el-input>
        </el-form-item>
        <el-form-item label="头图" required>
          <my-upload :model="form" prop="picUrl" />
        </el-form-item>
        <el-form-item label="难度" prop="diffculty" required>
          <el-radio-group v-model="form.diffculty">
            <el-radio label="困难"></el-radio>
            <el-radio label="容易"></el-radio>
            <el-radio label="一般"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜谱分类" prop="foodtag" required>
          <el-select v-model="form.foodtag" placeholder="请选择">
            <el-option-group
              v-for="group in foodoptions"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.children"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="健康分类" prop="diettag" required>
          <el-select v-model="form.diettag" placeholder="请选择">
            <el-option-group
              v-for="group in dietoptions"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.children"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="标签" prop="region">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="制作时长" prop="cookTime" required>
          <el-input v-model="form.cookTime" placeholder="制作时长"></el-input>
        </el-form-item>
        <el-form-item label="准备时长" prop="prepareTime" required>
          <el-input v-model="form.prepareTime" placeholder="准备时长"></el-input>
        </el-form-item>
        <el-form-item label="预计成本" prop="price" required>
          <el-input v-model="form.price" placeholder="预计成本">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <!-- <el-form-item label="材料" prop="delivery">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item> -->
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
          <el-button type="primary" @click="submitForm('form')">发布</el-button>
          <!-- <el-button @click="resetForm('form')">重置</el-button> -->
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
        desc: "",
        diettags: null,
        foodtags: null,
      },
    };
  },
  computed:{
    foodoptions(){
      return this.$store.getters.foodoptions;
    },
    dietoptions(){
      return this.$store.getters.dietoptions;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs.form.validate((valid)=>{
        if(valid){
          addFood({
            ...this.form, 
            username: this.$store.getters.username,
            userid: this.$store.getters.userid,
            }).then(res=>{
            if(res.data.code === 200){
              this.$notify.success('发布成功')
              setTimeout(() => {
                this.$router.push('/home')
              }, 0);
            }else{
              this.$notify.error({title:'错误了', message:res.data.msg})
            }
          })
        }
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