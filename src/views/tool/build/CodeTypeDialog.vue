<template>
  <div>
    <el-dialog
      v-bind="$attrs"
      width="500px"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      @open="onOpen"
      @close="onClose"
    >
      <el-row :gutter="15">
        <el-form
          ref="elForm"
          :model="formData"
          :rules="rules"
          size="medium"
          label-width="100px"
        >
          <el-col :span="24">
            <el-form-item label="生成类型" prop="type">
              <el-radio-group v-model="formData.type">
                <el-radio-button
                  v-for="(item, index) in typeOptions"
                  :key="index"
                  :label="item.value"
                  :disabled="item.disabled"
                >
                  {{ item.label }}
                </el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-if="showFileName" label="文件名" prop="fileName">
              <el-input
                v-model="formData.fileName"
                placeholder="请输入文件名"
                clearable
              />
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>

      <template v-slot:footer>
        <div>
          <el-button @click="close"> 取消 </el-button>
          <el-button type="primary" @click="handelConfirm"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
function inheriltClassAndStyle() {
  const attrs = this.$attrs;
  attrs.class && this.$el.classList.add(attrs.class);
  attrs.style &&
    Object.entries(attrs.style).forEach(([k, v]) => {
      this.$el.style[k] = v;
    });
}
export default {
  inheritAttrs: false,
  props: ["showFileName"],
  data() {
    return {
      formData: {
        fileName: undefined,
        type: "file",
      },
      rules: {
        fileName: [
          {
            required: true,
            message: "请输入文件名",
            trigger: "blur",
          },
        ],
        type: [
          {
            required: true,
            message: "生成类型不能为空",
            trigger: "change",
          },
        ],
      },
      typeOptions: [
        {
          label: "页面",
          value: "file",
        },
        {
          label: "弹窗",
          value: "dialog",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onOpen() {
      if (this.showFileName) {
        this.formData.fileName = `${+new Date()}.vue`;
      }
    },
    onClose() {},
    close(e) {
      $emit(this, "update:visible", false);
    },
    handelConfirm() {
      this.$refs.elForm.validate((valid) => {
        if (!valid) return;
        $emit(this, "confirm", { ...this.formData });
        this.close();
      });
    },
  },
  mounted() {
    inheriltClassAndStyle.call(this);
  },
  emits: ["update:visible", "confirm"],
};
</script>
