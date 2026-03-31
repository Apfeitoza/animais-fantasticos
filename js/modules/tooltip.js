export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(e) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = e.pageY + 20 + "px";
    tooltipBox.style.left = e.pageX + 20 + "px";

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent(e) {
      this.tooltipBox.remove();
      e.currentTarget.removeEventListener("mouseleave", onMouseLeave);
      e.currentTarget.removeEventListener("mouseleave", onMouseMove);
    },
  };

  //poderia ser uma função a ser passada dentro da função do mouseOver, porem foi criada como um objeto como função de callback com o handleEvent() - onde vc passa a função - sem isso não funciona

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + "px";
      this.tooltipBox.style.left = e.pageX + 20 + "px";
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
