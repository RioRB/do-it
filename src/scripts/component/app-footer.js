class AppFooter extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <section class="bg-altgrey">
            <div class="container-fluid text-center text-md-start mt-5 text-altblack">
                <div class="row mt-3">
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <img src="logo/do-it-logoo.png" alt="doit logo untuk footer" width="100">
                        <p class="pt-4">do.it siap memfasilitasi anda agar dapat mengelola semua tugas harian dengan gampang, juga tetap fokus serta konsisten dalam proses mencapai goalsnya.</p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase text-altpurple fw-bold">Layanan Kami</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #77287d; height: 2px"/>
                        <p><a href="#/todo" class="text-altblack">Todo Apps</a></p>
                        <p><a href="#/timer" class="text-altblack">Focus Timer</a></p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase text-altpurple fw-bold">Kantor Kami</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
                        <div class="d-flex align-items-start">
                            <div class="me-2 pt-1"><ion-icon name="location-outline" size="small"></ion-icon></div>
                            <div>Jl. Raya Kayen No. 56, Kayangan, Diwek, Jombang</div>
                        </div>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase text-altpurple fw-bold">Pusat Bantuan</h6>
                        <hr class="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #7c4dff; height: 2px"/>
                        <div class="d-flex align-items-start">
                            <div class="me-2 pt-1"><ion-icon name="mail-outline" size="small"></ion-icon></div>
                            <div>info@example.com</div>
                        </div>
                        <div class="d-flex align-items-start mt-3">
                            <div class="me-2 pt-1"><ion-icon name="call-outline" size="small"></ion-icon></div>
                            <div>+62868 2345 6788</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div class="text-center p-3 bg-altgrey text-altblack">
            Copyright © 2022 do.it.
        </div>
    `
  }
}

customElements.define('app-footer', AppFooter)
