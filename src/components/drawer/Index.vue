<template>
  <div class="drawer">
    <div class="inner_container">
      <h4>Categorias</h4>
      <ul class="list">
        <li><arrow />Todas<span>1</span></li>
        <li><arrow />Urgentes<span class="danger">2</span></li>
        <li><arrow />Importantes<span class="warning">3</span></li>
        <li><arrow />Outras<span>4</span></li>
        <li><arrow />Finalizadas<span>5</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
import './Index.styl'
export default {
  name: "Drawer",
};
</script>
