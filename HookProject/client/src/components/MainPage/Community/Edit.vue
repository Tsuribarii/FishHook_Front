<template>
  <div class="container" style="margin-top: 10%;">
    <vue-ckeditor
      v-model="content"
      :config="config"
      @blur="onBlur($event)"
      @focus="onFocus($event)"
      @contentDom="onContentDom($event)"
      @dialogDefinition="onDialogDefinition($event)"
      @fileUploadRequest="onFileUploadRequest($event)"
      @fileUploadResponse="onFileUploadResponse($event)"
    />
    <br />
    <button type="submit" class="btn btn-lg btn-primary1 btn-block">Edit</button>
  </div>
</template>

<script>
import VueCkeditor from 'vue-ckeditor2'

export default {
  components: { VueCkeditor },
  data () {
    return {
      content: '',
      config: {
        toolbar: [
          { name: 'document', items: ['Source'] },
          {
            name: 'basicstyles',
            items: [
              'Bold',
              'Italic',
              'Underline',
              'Strike',
              'Subscript',
              'Superscript'
            ]
          },
          {
            name: 'paragraph',
            items: [
              'NumberedList',
              'BulletedList',
              '-',
              'JustifyLeft',
              'JustifyCenter',
              'JustifyRight',
              'JustifyBlock'
            ]
          },
          { name: 'links', items: ['Link', 'Unlink'] },
          { name: 'insert', items: ['Image', 'Table'] },
          '/',
          { name: 'styles', items: ['Font', 'FontSize'] },
          { name: 'colors', items: ['TextColor', 'BGColor'] }
        ],
        height: 300
      }
    }
  },
  methods: {
    onBlur (evt) {
      console.log(evt)
    },
    onFocus (evt) {
      console.log(evt)
    },
    onContentDom (evt) {
      console.log(evt)
    },
    onDialogDefinition  (evt) {
      console.log(evt)
    },
    onFileUploadRequest (evt) {
      console.log(evt)
    },
    onFileUploadResponse (evt) {
      console.log(evt)
    }
  }
}
</script>
