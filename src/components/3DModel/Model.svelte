<script lang="ts">
    import ThreeModel from "./ThreeModel.svelte";
    import * as THREE from "three";
    import * as SC from 'svelte-cubed';
</script>

<SC.Canvas
    background={new THREE.Color("#262626")}
    antialias
>
    <SC.PerspectiveCamera 
        position={[30, 0, 60]}
        near={0.1}
        far={500}
        fov={45}
    />
    <SC.OrbitControls 
        enabled={true}
        enableZoom={true}
        autoRotate={false}
        autoRotateSpeed={2}
        enableDamping={true}
        dampingFactor={0.1}
        target={[-6, -5, 0]}
    />
    <SC.DirectionalLight
        color={new THREE.Color(0xffffff)}
        position={[0,10,10]}
        intensity={0.75}
        shadow={false}
    />
    <SC.AmbientLight
        color={new THREE.Color(0xffffff)}
        intensity={0.75}
    />
    <ThreeModel />
</SC.Canvas>
