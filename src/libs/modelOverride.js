AFRAME.registerComponent('modify-materials', {
    init: function () {
        // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
                // if (node.name.indexOf('ship') !== -1) {
                // {
                //     node.material.color.set('red');
                // }
                const anisotropyLevelZero = null;
                const changeAnisotropy = false;
                if (node.type !== "Bone" && typeof node.material !== 'undefined') {
                    console.log(node.material);
                    if (changeAnisotropy) {
                        if (node.material.map !== null && node.material.map !== 'undefined') {
                            node.material.map.anisotropy = anisotropyLevelZero;
                        }
                        if (node.material.glossinessMap !== null && node.material.glossinessMap !== 'undefined') {
                            node.material.glossinessMap.anisotropy = anisotropyLevelZero;
                        }
                        if (node.material.normalMap !== null && node.material.normalMap !== 'undefined') {
                            node.material.normalMap.anisotropy = anisotropyLevelZero;
                        }

                        if (node.material.specularMap !== null && node.material.specularMap !== 'undefined')
                            node.material.specularMap.anisotropy = anisotropyLevelZero;
                        console.log("Changed aniso for material " + node.material.name);
                    }
                }
            });
        });
    }
});
