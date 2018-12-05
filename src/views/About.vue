<template>
  <div id="about">
    <div>
      <input v-model="text" type="text" class="input">
      <button class="button" @click="onClickAdd">追加</button>

      <test-card v-for="(item, i) in list" :key="item.id"
                 :card-item="item" :index="i"
                 @delete-item="onClickDelete"/>
    </div>

    <div>
      <button class="button" @click="onClickDeleteChecked">選択削除</button>
      <button class="button" @click="onClickDeleteAll">全削除</button>
    </div>
  </div>
</template>

<script>
  import TestCard from '@/components/TestCard.vue'

  export default {
    components: {TestCard},
    data() {
      return {
        text: '',
        list: [
          {id: 1, name: 'りんご', checked: false},
          {id: 2, name: 'みかん', checked: false},
          {id: 3, name: 'バナナ', checked: false}
        ]
      }
    },
    methods: {
      onClickAdd() {
        if (this.text) {
          this.list.push({
            id: this.list.length,
            name: this.text,
            checked: false
          })
        }
        this.text = ''
      },
      onClickDelete(index) {
        this.$delete(this.list, index)
      },
      onClickDeleteAll() {
        this.list = []
      },
      onClickDeleteChecked() {
        this.list = this.list.filter(item => !item.checked)
      }
    }
  }
</script>

<style lang="scss">
  #about {
    .input {
      border: 1px solid black;
    }
  }
</style>
