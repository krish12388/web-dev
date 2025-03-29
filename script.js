function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `pics\male0001.png
  pics/male0002.png 
  pics/male0003.png
   pics/male0004.png
    pics/male0005.png 
    pics/male0006.png 
    pics/male0007.png 
    pics/male0008.png 
    pics/male0009.png 
    pics/male0010.png 
    pics/male0011.png 
    pics/male0012.png 
    pics/male0013.png
     pics/male0014.png
      pics/male0015.png
       pics/male0016.png
        pics/male0017.png
         pics/male0018.png 
         pics/male0019.png 
         pics/male0020.png 
         pics/male0021.png 
         pics/male0022.png 
         pics/male0023.png 
         pics/male0024.png 
         pics/male0025.png 
         pics/male0026.png 
         pics/male0027.png 
         pics/male0028.png 
         pics/male0029.png 
         pics/male0030.png 
         pics/male0031.png 
         pics/male0032.png 
         pics/male0033.png 
         pics/male0034.png 
         pics/male0035.png 
         pics/male0036.png 
         pics/male0037.png 
         pics/male0038.png 
         pics/male0039.png 
         pics/male0041.png 
         pics/male0042.png 
         pics/male0043.png 
         pics/male0044.png 
         pics/male0045.png 
         pics/male0046.png 
         pics/male0047.png 
         pics/male0048.png 
         pics/male0049.png 
         pics/male0050.png 
         pics/male0051.png 
         pics/male0052.png 
         pics/male0053.png 
         pics/male0054.png 
         pics/male0055.png 
         pics/male0056.png 
         pics/male0057.png 
         pics/male0058.png 
         pics/male0059.png 
         pics/male0060.png 
         pics/male0061.png 
         pics/male0062.png 
         pics/male0063.png 
         pics/male0064.png 
         pics/male0065.png 
         pics/male0066.png 
         pics/male0067.png 
         pics/male0068.png 
         pics/male0069.png 
         pics/male0070.png 
         pics/male0071.png 
         pics/male0072.png 
         pics/male0073.png 
         pics/male0074.png 
         pics/male0075.png 
         pics/male0076.png 
         pics/male0077.png 
         pics/male0078.png 
         pics/male0079.png 
         pics/male0080.png 
         pics/male0081.png 
         pics/male0082.png 
         pics/male0083.png 
         pics/male0084.png 
         pics/male0085.png 
         pics/male0086.png 
         pics/male0087.png 
         pics/male0088.png 
         pics/male0089.png 
         pics/male0090.png 
         pics/male0091.png 
         pics/male0092.png 
         pics/male0093.png 
         pics/male0094.png 
         pics/male0095.png 
         pics/male0096.png 
         pics/male0097.png 
         pics/male0098.png 
         pics/male0099.png 
         pics/male0100.png 
         pics/male0101.png 
         pics/male0102.png 
         pics/male0103.png
          pics/male0104.png 
          pics/male0105.png 
          pics/male0106.png 
          pics/male0107.png 
          pics/male0108.png 
          pics/male0109.png 
          pics/male0110.png 
          pics/male0111.png 
          pics/male0112.png 
          pics/male0113.png 
          pics/male0114.png 
          pics/male0115.png 
          pics/male0116.png 
          pics/male0117.png 
          pics/male0118.png 
          pics/male0119.png 
          pics/male0120.png 
          pics/male0121.png 
          pics/male0122.png 
          pics/male0123.png 
          pics/male0124.png 
          pics/male0125.png 
          pics/male0126.png 
          pics/male0127.png 
          pics/male0128.png 
          pics/male0129.png 
          pics/male0130.png 
          pics/male0131.png 
          pics/male0132.png 
          pics/male0133.png 
          pics/male0134.png 
          pics/male0135.png 
          pics/male0136.png 
          pics/male0137.png 
          pics/male0138.png 
          pics/male0139.png 
          pics/male0140.png 
          pics/male0141.png 
          pics/male0142.png 
          pics/male0143.png 
          pics/male0144.png 
          pics/male0145.png 
          pics/male0146.png 
          pics/male0147.png 
          pics/male0148.png 
          pics/male0149.png 
          pics/male0150.png 
          pics/male0151.png 
          pics/male0152.png 
          pics/male0153.png 
          pics/male0154.png 
          pics/male0155.png 
          pics/male0156.png 
          pics/male0157.png 
          pics/male0158.png 
          pics/male0159.png 
          pics/male0160.png 
          pics/male0161.png 
          pics/male0162.png 
          pics/male0163.png 
          pics/male0164.png 
          pics/male0165.png 
          pics/male0166.png 
          pics/male0167.png 
          pics/male0168.png 
          pics/male0169.png 
          pics/male0170.png 
          pics/male0171.png 
          pics/male0172.png 
          pics/male0173.png 
          pics/male0174.png 
          pics/male0175.png 
          pics/male0176.png 
          pics/male0177.png 
          pics/male0178.png 
          pics/male0179.png 
          pics/male0180.png 
          pics/male0181.png 
          pics/male0182.png 
          pics/male0183.png 
          pics/male0184.png 
          pics/male0185.png 
          pics/male0186.png 
          pics/male0187.png 
          pics/male0188.png 
          pics/male0189.png 
          pics/male0190.png 
          pics/male0191.png 
          pics/male0192.png 
          pics/male0193.png 
          pics/male0194.png 
          pics/male0195.png 
          pics/male0196.png 
          pics/male0197.png 
          pics/male0198.png 
          pics/male0199.png 
          pics/male0200.png 
          pics/male0201.png 
          pics/male0202.png 
          pics/male0203.png 
          pics/male0204.png 
          pics/male0205.png 
          pics/male0206.png 
          pics/male0207.png 
          pics/male0208.png 
          pics/male0209.png 
          pics/male0210.png 
          pics/male0211.png 
          pics/male0212.png 
          pics/male0213.png 
          pics/male0214.png 
          pics/male0215.png 
          pics/male0216.png           
          pics/male0217.png 
          pics/male0218.png 
          pics/male0219.png 
          pics/male0220.png 
          pics/male0221.png 
          pics/male0222.png 
          pics/male0223.png 
          pics/male0224.png 
          pics/male0225.png 
          pics/male0226.png 
          pics/male0227.png 
          pics/male0228.png 
          pics/male0229.png 
          pics/male0230.png 
          pics/male0231.png 
          pics/male0232.png 
          pics/male0233.png 
          pics/male0234.png 
          pics/male0235.png 
          pics/male0236.png 
          pics/male0237.png 
          pics/male0238.png 
          pics/male0239.png 
          pics/male0240.png 
          pics/male0241.png 
          pics/male0242.png 
          pics/male0243.png 
          pics/male0244.png 
          pics/male0245.png 
          pics/male0246.png 
          pics/male0247.png 
          pics/male0248.png 
          pics/male0249.png 
          pics/male0250.png 
          pics/male0251.png 
          pics/male0252.png 
          pics/male0253.png 
          pics/male0254.png 
          pics/male0255.png 
          pics/male0256.png 
          pics/male0257.png 
          pics/male0258.png 
          pics/male0259.png 
          pics/male0260.png 
          pics/male0261.png 
          pics/male0262.png 
          pics/male0263.png 
          pics/male0264.png 
          pics/male0265.png 
          pics/male0266.png 
          pics/male0267.png 
          pics/male0268.png 
          pics/male0269.png 
          pics/male0270.png
           pics/male0271.png 
           pics/male0272.png 
           pics/male0273.png 
           pics/male0274.png 
           pics/male0275.png 
           pics/male0276.png 
           pics/male0277.png 
           pics/male0278.png 
           pics/male0279.png 
           pics/male0280.png 
           pics/male0281.png 
           pics/male0282.png 
           pics/male0283.png 
           pics/male0284.png 
           pics/male0285.png 
           pics/male0286.png 
           pics/male0287.png 
           pics/male0288.png 
           pics/male0289.png 
           pics/male0290.png 
           pics/male0291.png 
           pics/male0292.png 
           pics/male0293.png 
           pics/male0294.png 
           pics/male0295.png 
           pics/male0296.png 
           pics/male0297.png 
           pics/male0298.png 
           pics/male0299.png 
           pics/male0300.png`;
           return data.split("\n")[index];
          }
          
          const frameCount = 299;
          
          const images = [];
          const imageSeq = {
            frame: 1,
          };
          
          for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
          }
          
          gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: `none`,
            scrollTrigger: {
              scrub: 0.15,
              trigger: `#page>canvas`,
              start: `top top`,
              end: `600% top`,
              scroller: `#main`,
            },
            onUpdate: render,
          });
          
          images[1].onload = render;
          
          function render() {
            scaleImage(images[imageSeq.frame], context);
          }
          
          function scaleImage(img, ctx) {
            var canvas = ctx.canvas;
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
              img,
              0,
              0,
              img.width,
              img.height,
              centerShift_x,
              centerShift_y,
              img.width * ratio,
              img.height * ratio
            );
          }
          ScrollTrigger.create({
            trigger: "#page>canvas",
            pin: true,
            // markers:true,
            scroller: `#main`,
            start: `top top`,
            end: `600% top`,
          });
          
          
          
          gsap.to("#page1",{
            scrollTrigger:{
              trigger:`#page1`,
              start:`top top`,
              end:`bottom top`,
              pin:true,
              scroller:`#main`
            }
          })
          gsap.to("#page2",{
            scrollTrigger:{
              trigger:`#page2`,
              start:`top top`,
              end:`bottom top`,
              pin:true,
              scroller:`#main`
            }
          })
          gsap.to("#page3",{
            scrollTrigger:{
              trigger:`#page3`,
              start:`top top`,
              end:`bottom top`,
              pin:true,
              scroller:`#main`
            }
          })