let rgba = new rgba(`

    const float PI = 3.14159265359;

    vec3 hash(vec3 p) { 
        float n = sin(dot(p, vec3(7, 157, 113)));    
        return fract(vec3(2097152, 262144, 32768)*n)*2. - 1.;
    }

    float noised(in vec3 p){
        vec3 i = floor(p + dot(p, vec3(0.333333)) );  
        p -= i - dot(i, vec3(0.166666)) ;
        vec3 i1 = step(p.yzx, p), 
             i2 = max(i1, 1.0-i1.zxy); 
        i1 = min(i1, 1.0-i1.zxy);    
        vec3 p1 = p - i1 + 0.166666, 
             p2 = p - i2 + 0.333333, 
             p3 = p - 0.5;
        vec4 v = max(0.5 - vec4(dot(p,p),   dot(p1,p1), 
                                dot(p2,p2), dot(p3,p3)), 0.0);
        vec4 d = vec4(dot(p,  hash(i)),      dot(p1, hash(i + i1)), 
                      dot(p2, hash(i + i2)), dot(p3, hash(i + 1.)));
        return clamp(dot(d, v*v*v*8.)*1.732 + .5, 0., 1.);
    }

    vec2 smoothRepeatStart(float x, float size) {
      return vec2(mod(x - size / 2., size),  mod(x, size));
    }

    float smoothRepeatEnd(float a, float b, float x, float size) {
      float v = sin((x / size) * PI * 2. - PI * .5) * .5 + .5;
      return mix(a, b, smoothstep( 0., 1., v ) );
    }

   void main(void) {
    vec2 uv = gl_FragCoord.xy/resolution;
    float t = time;
    float x = uv.x - t;
    vec2 ab = smoothRepeatStart(x, 2.);
    vec2 mr = mouse/resolution;
    float sint = sin(t);
    float noiseA = noised(vec3(vec2(ab.x, uv.x) * sint*sin(0.1+mr.x), 0.));
    float noiseB = noised(vec3(vec2(ab.y, uv.y) * sint*sin(0.1+mr.y), 0.));
    float noise = smoothRepeatEnd(noiseA, noiseB, x, 2.)* .2;
    noise = mix(noise, dot(uv, vec2(mouse.x/resolution.x-2., 1.)*.9), .6);
    float spacing = (1. + mr.y)/ 44.;
    float lines = mod(noise, spacing) / spacing;
    lines = min(lines * 2., 1.) - max(lines * 2. - 0.8, 0.1);
    gl_FragColor = vec4(vec3(clamp(lines, 0.0, 1.0))*20., 1.0);
   }

`, {uniforms: {mouse: '2f'}});

function pointer (e) {
  let ev = e && e.touches ? e.touches[0] : e;
  rgba.mouse([
    ev ? ev.clientX : mouse[0],
    ev ? innerHeight - ev.clientY: mouse[1]
  ])
}

addEventListener('mousemove', pointer);
addEventListener('touchmove', pointer);

  