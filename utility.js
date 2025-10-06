export function createToast(toastObj) {
  const toastDiv = document.createElement("div");
  toastDiv.className = "toast";
  toastDiv.innerText = toastObj.message;
  document.body.appendChild(toastDiv);

  requestAnimationFrame(() => toastDiv.classList.add("show"));

  setTimeout(() => {
    toastDiv.classList.remove("show");
    toastDiv.classList.add("hide");
    setTimeout(() => {
      document.body.removeChild(toastDiv);
    }, 500);
  }, 3000);
}

export function createAlert(alertObj) {
  const alertDiv = document.createElement("div");
  alertDiv.className = "alertHolder";

  //   this will create the callout div
  const alertCallout = document.createElement("div");
  alertCallout.className = "alert-callout-out";
  alertDiv.appendChild(alertCallout);

  //   this creates the title or h1
  const title = document.createElement("h1");
  alertCallout.appendChild(title);
  title.innerText = "Alert Title";

  //   this appends the alertDiv to the body
  document.body.appendChild(alertDiv);
}

/* <div class="alertHolder">
  <div class="alert-callout-out">
    <h1>Alert Title</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim
      fuga non deserunt a quisquam suscipit, mollitia exercitationem aspernatur,
      vel magnam libero officiis consequatur tempore itaque ab, ipsum
      voluptatibus ratione.
    </p>
    <span class="x-close-alert">X</span>
    <div class="button-bar">
      <div class="btn-confirm">Confirm</div>
      <div class="btn-cancel">Cancel</div>
    </div>
  </div>
</div>; */