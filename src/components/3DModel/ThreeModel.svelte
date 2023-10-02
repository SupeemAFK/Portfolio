<script lang="ts">
    import * as SC from 'svelte-cubed';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { onMount } from 'svelte';
  
    let model = null;
  
    function loadGLTF() {
      const loader = new GLTFLoader();
      return loader.loadAsync('/Peem.gltf');
    }
  
    onMount(() => {
      loadGLTF().then(_model => {
        model = _model
      });
    })
  
  </script>
  
  {#if model}
    <SC.Primitive
      object={model.scene}
      scale={[20, 20, 20]}
    />
  {/if}