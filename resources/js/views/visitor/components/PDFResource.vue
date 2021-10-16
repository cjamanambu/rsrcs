<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <div class="d-flex justify-content-between">
          <strong class="mb-1">{{ pdf.title }}</strong>
          <div class="dropdown">
            <ion-icon name="ellipsis-horizontal-outline" class="dropdown-toggle" data-toggle="dropdown" style="cursor: pointer" />
            <div class="dropdown-menu">
              <a class="dropdown-item" href="javascript:void(0)" @click="viewPDF(pdf)">
                <ion-icon name="eye-outline" size="small" class="mr-1"></ion-icon>
                View PDF
              </a>
              <a class="dropdown-item" href="javascript:void(0)" @click="downloadPDF(pdf)">
                <ion-icon name="download-outline" size="small" class="mr-1"></ion-icon>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-1">{{ pdf.file_name }}</p>
      <small>{{ new Date(pdf.created_at).toUTCString() }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pdf: {
      type: Object,
      required: true
    },
  },
  methods: {
    viewPDF(pdf) {
      this.axios.get(`${this.$api}visitor/pdf/${pdf.id}`, { responseType: 'arraybuffer' }).then(response => {
        let blob = new Blob([response.data], { type: 'application/pdf' })
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.target = '_blank'
        link.click()
      })
      .catch(error => console.log(error))
    },
    downloadPDF(pdf) {
      this.axios.get(`${this.$api}visitor/pdf/${pdf.id}`, { responseType: 'arraybuffer' }).then(response => {
        let newBlob = new Blob([response.data], { type: 'application/pdf' })
        // IE
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob)
          return
        }
        // For other browsers:
        const data = window.URL.createObjectURL(newBlob)
        let link = document.createElement('a')
        link.href = data
        link.download = pdf.file_name
        link.click()
        setTimeout(function () {
          // Firefox
          window.URL.revokeObjectURL(data)
        }, 100)
      })
      .catch(error => console.log(error))
    },
  }
}
</script>