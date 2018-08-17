namespace z89 {
    export class testPipeline extends Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline {
    
        
       
      constructor(config) {

      

            config['fragShader'] =  `

            precision mediump float;
            uniform float rand;
            uniform vec4 uResolution;
            uniform sampler2D uMainSampler;
            varying vec2 outTexCoord;

void main (void)
{
   vec4 col = texture2D(uMainSampler, outTexCoord);
   vec4 col_r = texture2D(uMainSampler, outTexCoord + vec2((+25.5 / uResolution.x) * rand, 0));
   vec4 col_l = texture2D(uMainSampler, outTexCoord + vec2((.0 / uResolution.x) * rand, 0));
   vec4 col_g = texture2D(uMainSampler, outTexCoord + vec2((-25.5 / uResolution.x) * rand, 0));
   col.g = col.g + col_l.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;
   col.g = col.g + col_r.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;
   col.g = col.g + col_g.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;
   gl_FragColor.rgba = col.rgba;
}





            `;


            /*`



            precision mediump float;
            uniform float rand;
            uniform vec4 uResolution;
            uniform sampler2D uMainSampler;
            varying vec2 outTexCoord;

void main (void)
{
   vec4 col = texture2D(uMainSampler, outTexCoord);
   vec4 col_r = texture2D(uMainSampler, outTexCoord + vec2((+25.5 / uResolution.x) * rand, 0));
   vec4 col_l = texture2D(uMainSampler, outTexCoord + vec2((.0 / uResolution.x) * rand, 0));
   vec4 col_g = texture2D(uMainSampler, outTexCoord + vec2((-25.5 / uResolution.x) * rand, 0));
   col.g = col.g + col_l.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;
   col.g = col.g + col_r.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;
   col.g = col.g + col_g.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;
   gl_FragColor.rgba = col.rgba;
}



            precision mediump float;

            uniform sampler2D uMainSampler;
            uniform vec2 uResolution;
            uniform float uTime;

            varying vec2 outTexCoord;
            varying vec4 outTint;

            vec4 plasma()
            {
                vec2 pixelPos = gl_FragCoord.xy / uResolution * 20.0;
                float freq = 0.8;
                float value =
                    sin(uTime + pixelPos.x * freq) +
                    sin(uTime + pixelPos.y * freq) +
                    sin(uTime + (pixelPos.x + pixelPos.y) * freq) +
                    cos(uTime + sqrt(length(pixelPos - 0.5)) * freq * 2.0);

                return vec4(
                    cos(value),
                    sin(value),
                    sin(value * 3.14 * 2.0),
                    cos(value)
                );
            }

            void main() 
            {
                vec4 texel = texture2D(uMainSampler, outTexCoord);
                texel *= vec4(outTint.rgb * outTint.a, outTint.a);
                gl_FragColor = texel * plasma();
            }

            `;*/
            super(config);
        }
    
    
   
  
    
  
  
    }
  }
  