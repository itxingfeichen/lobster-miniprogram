#!/usr/bin/env node
/**
 * generate-icons.js — 批量生成 TabBar 图标和静态图片资源
 * 使用 @napi-rs/canvas
 * 用法: node scripts/generate-icons.js
 */
const path = require('path');
const fs = require('fs');
let createCanvas;
try { ({ createCanvas } = require('@napi-rs/canvas')); }
catch { ({ createCanvas } = require('/tmp/icon-gen/node_modules/@napi-rs/canvas')); }

const ROOT = path.resolve(__dirname, '..');
const ICONS = path.join(ROOT, 'static', 'icons');
const IMAGES = path.join(ROOT, 'static', 'images');
const GRAY = '#7A7E83', GREEN = '#3cc51f';
fs.mkdirSync(ICONS, { recursive: true });
fs.mkdirSync(IMAGES, { recursive: true });

function save(canvas, fp) {
  const b = canvas.toBuffer('image/png');
  fs.writeFileSync(fp, b);
  console.log('  ✅ ' + path.relative(ROOT, fp) + ' (' + b.length + ' bytes)');
}

// ── Icons 81×81 ──
function home(ctx, s, c) {
  ctx.clearRect(0,0,s,s); ctx.fillStyle=c;
  const cx=s/2, p=s*.15;
  ctx.beginPath(); ctx.moveTo(cx,p); ctx.lineTo(s-p,s*.45); ctx.lineTo(p,s*.45); ctx.closePath(); ctx.fill();
  ctx.fillRect(s*.22,s*.42,s*.56,s*.43);
  ctx.fillStyle='#fff'; ctx.fillRect(cx-s*.09,s*.63,s*.18,s*.22);
}
function learn(ctx, s, c) {
  ctx.clearRect(0,0,s,s); ctx.fillStyle=c;
  const cx=s/2, p=s*.14;
  ctx.beginPath(); ctx.moveTo(cx,s*.25); ctx.quadraticCurveTo(cx-s*.15,s*.2,p,s*.22);
  ctx.lineTo(p,s-p); ctx.quadraticCurveTo(cx-s*.1,s-p-s*.05,cx,s-p+s*.02); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(cx,s*.25); ctx.quadraticCurveTo(cx+s*.15,s*.2,s-p,s*.22);
  ctx.lineTo(s-p,s-p); ctx.quadraticCurveTo(cx+s*.1,s-p-s*.05,cx,s-p+s*.02); ctx.closePath(); ctx.fill();
  ctx.strokeStyle='#fff'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.moveTo(cx,s*.25); ctx.lineTo(cx,s-p+s*.02); ctx.stroke();
  ctx.lineWidth=1.5;
  for(let i=0;i<3;i++){const y=s*.4+i*s*.12;
    ctx.beginPath();ctx.moveTo(p+s*.06,y);ctx.lineTo(cx-s*.06,y);ctx.stroke();
    ctx.beginPath();ctx.moveTo(cx+s*.06,y);ctx.lineTo(s-p-s*.06,y);ctx.stroke();}
}
function code(ctx, s, c) {
  ctx.clearRect(0,0,s,s); ctx.strokeStyle=c; ctx.lineWidth=5; ctx.lineCap='round'; ctx.lineJoin='round';
  const cx=s/2, cy=s/2, p=s*.15;
  ctx.beginPath(); ctx.moveTo(cx-s*.08,p+s*.05); ctx.lineTo(p,cy); ctx.lineTo(cx-s*.08,s-p-s*.05); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx+s*.08,p+s*.05); ctx.lineTo(s-p,cy); ctx.lineTo(cx+s*.08,s-p-s*.05); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx+s*.06,p+s*.02); ctx.lineTo(cx-s*.06,s-p-s*.02); ctx.stroke();
}
function mine(ctx, s, c) {
  ctx.clearRect(0,0,s,s); ctx.fillStyle=c; const cx=s/2;
  ctx.beginPath(); ctx.arc(cx,s*.3,s*.17,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx,s*.63,s*.38,s*.25,0,Math.PI,0,true); ctx.closePath(); ctx.fill();
}

function genIcons() {
  console.log('\n📱 TabBar icons (81×81)…');
  const S=81, list=[{n:'home',d:home},{n:'learn',d:learn},{n:'code',d:code},{n:'mine',d:mine}];
  for(const{n,d}of list) for(const[sfx,clr]of[['',GRAY],['-active',GREEN]]){
    const c=createCanvas(S,S); d(c.getContext('2d'),S,clr); save(c,path.join(ICONS,n+sfx+'.png'));
  }
}

function genLogo() {
  console.log('\n🦞 Logo (200×200)…');
  const S=200,c=createCanvas(S,S),x=c.getContext('2d'),cx=S/2,cy=S/2;
  x.beginPath();x.arc(cx,cy,90,0,Math.PI*2);x.fillStyle=GREEN;x.fill();
  x.fillStyle='#ff6b35';
  x.beginPath();x.ellipse(cx,cy+5,28,38,0,0,Math.PI*2);x.fill();
  x.beginPath();x.arc(cx,cy-30,18,0,Math.PI*2);x.fill();
  x.fillStyle='#fff';
  x.beginPath();x.arc(cx-8,cy-35,5,0,Math.PI*2);x.fill();
  x.beginPath();x.arc(cx+8,cy-35,5,0,Math.PI*2);x.fill();
  x.fillStyle='#333';
  x.beginPath();x.arc(cx-8,cy-35,2.5,0,Math.PI*2);x.fill();
  x.beginPath();x.arc(cx+8,cy-35,2.5,0,Math.PI*2);x.fill();
  x.strokeStyle='#ff6b35';x.lineWidth=6;x.lineCap='round';x.lineJoin='round';
  for(const d of[-1,1]){
    x.beginPath();x.moveTo(cx+d*25,cy-5);x.lineTo(cx+d*55,cy-25);x.stroke();
    x.beginPath();x.moveTo(cx+d*55,cy-25);x.lineTo(cx+d*70,cy-40);x.stroke();
    x.beginPath();x.moveTo(cx+d*55,cy-25);x.lineTo(cx+d*72,cy-20);x.stroke();
  }
  x.fillStyle='#ff6b35';
  for(let i=1;i<=3;i++){x.beginPath();x.ellipse(cx,cy+30+i*10,20-i*4,6,0,0,Math.PI*2);x.fill();}
  x.strokeStyle='#ff6b35';x.lineWidth=2.5;
  x.beginPath();x.moveTo(cx-5,cy-45);x.quadraticCurveTo(cx-20,cy-75,cx-35,cy-70);x.stroke();
  x.beginPath();x.moveTo(cx+5,cy-45);x.quadraticCurveTo(cx+20,cy-75,cx+35,cy-70);x.stroke();
  x.fillStyle='#fff';x.font='bold 20px Arial,sans-serif';x.textAlign='center';x.textBaseline='middle';
  x.fillText('OpenClaw',cx,cy+78);
  save(c,path.join(IMAGES,'logo.png'));
}

function genAvatar() {
  console.log('\n👤 Default avatar (200×200)…');
  const S=200,c=createCanvas(S,S),x=c.getContext('2d'),cx=S/2;
  x.beginPath();x.arc(cx,cx,95,0,Math.PI*2);x.fillStyle='#E8E8E8';x.fill();
  x.fillStyle='#C0C0C0';
  x.beginPath();x.arc(cx,75,32,0,Math.PI*2);x.fill();
  x.beginPath();x.ellipse(cx,165,55,40,0,Math.PI,0,true);x.closePath();x.fill();
  save(c,path.join(IMAGES,'default-avatar.png'));
}

function genEmpty() {
  console.log('\n📭 Empty state (300×300)…');
  const S=300,c=createCanvas(S,S),x=c.getContext('2d'),cx=S/2;
  x.strokeStyle='#D0D0D0';x.fillStyle='#F5F5F5';x.lineWidth=3;x.lineCap='round';x.lineJoin='round';
  const bx=cx-60,by=100,bw=120,bh=90;
  x.fillRect(bx,by,bw,bh);x.strokeRect(bx,by,bw,bh);
  x.fillStyle='#EBEBEB';
  x.beginPath();x.moveTo(bx-10,by);x.lineTo(bx+15,by-30);x.lineTo(bx+bw-15,by-30);x.lineTo(bx+bw+10,by);x.closePath();x.fill();x.stroke();
  x.fillStyle='#E0E0E0';
  x.beginPath();x.moveTo(bx-10,by);x.lineTo(bx-25,by-40);x.lineTo(bx+15,by-30);x.closePath();x.fill();x.stroke();
  x.beginPath();x.moveTo(bx+bw+10,by);x.lineTo(bx+bw+25,by-40);x.lineTo(bx+bw-15,by-30);x.closePath();x.fill();x.stroke();
  x.setLineDash([5,5]);x.strokeStyle='#C8C8C8';x.lineWidth=1.5;
  x.beginPath();x.moveTo(bx+20,by+35);x.lineTo(bx+bw-20,by+35);x.stroke();
  x.beginPath();x.moveTo(bx+30,by+50);x.lineTo(bx+bw-30,by+50);x.stroke();
  x.setLineDash([]);
  x.fillStyle='#B0B0B0';x.font='16px Arial,sans-serif';x.textAlign='center';
  x.fillText('暂无数据',cx,by+bh+40);
  x.font='13px Arial,sans-serif';x.fillStyle='#C8C8C8';
  x.fillText('快去探索更多内容吧~',cx,by+bh+65);
  save(c,path.join(IMAGES,'empty-state.png'));
}

console.log('🚀 Starting asset generation…');
genIcons(); genLogo(); genAvatar(); genEmpty();
console.log('\n✨ Done!');
