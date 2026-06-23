/**
 * Central image registry. All sources live in src/assets/img/ and are
 * optimized at build time by Astro (<Image>/<Picture> + sharp).
 * Most sources only exist as WebP/AVIF (legacy pipeline) — sharp reads both.
 */
import profile from '../assets/img/who-am-i/gustin-profile.avif';
import logoGgustin from '../assets/img/general/logo_ggustin.webp';

import clientBruxeo from '../assets/img/clients/bruxeo.webp';
import clientDecide from '../assets/img/clients/decide_logo.webp';
import clientMedC2 from '../assets/img/clients/medC2.webp';
import clientDlab from '../assets/img/clients/logo_dlab.webp';
import clientUcl from '../assets/img/clients/ucl.webp';
import clientCusl from '../assets/img/clients/CUSL.webp';

import companyGate16 from '../assets/img/companies/bm_logo.png';
import companyVub from '../assets/img/companies/vub_logo_new.png';
import companyPwablo from '../assets/img/companies/pwablo_logo.webp';
import companyBruxeo from '../assets/img/companies/bruxeo.png';
import companyMedC2 from '../assets/img/companies/medC2.webp';
import companyUclouvain from '../assets/img/companies/logo_uclouvain.png';

import workGhostly from '../assets/img/works/ghostly_dashboard.webp';
import workImmuno from '../assets/img/works/immuno_mock.webp';
import workIpda from '../assets/img/works/ipda_mock.webp';
import workDecide from '../assets/img/works/decide_mock.webp';
import workPwablo from '../assets/img/works/pwablo_live.webp';
import workMypc from '../assets/img/works/MyPC_finalB.webp';
import workWadaff from '../assets/img/works/wadaff.webp';

import type { ImageMap } from './types';

// Single portrait used only in the hero. The About section is text-only, so the
// same face never appears twice on the page. The source is a bright, natural
// studio headshot (colour); CSS renders it grayscale at rest and reveals colour
// on hover, so the colour source is required for that hover to actually shift.
export const heroImage = profile;
export const logoImage = logoGgustin;

export const clientLogos: ImageMap = {
  bruxeo: clientBruxeo,
  decide: clientDecide,
  medc2: clientMedC2,
  dlab: clientDlab,
  ucl: clientUcl,
  cusl: clientCusl,
};

export const companyLogos: ImageMap = {
  gate16: companyGate16,
  vub: companyVub,
  pwablo: companyPwablo,
  bruxeo: companyBruxeo,
  medc2: companyMedC2,
  uclouvain: companyUclouvain,
};

export const workImages: ImageMap = {
  ghostly: workGhostly,
  immuno: workImmuno,
  ipda: workIpda,
  decide: workDecide,
  'decide-logo': clientDecide,
  pwablo: workPwablo,
  mypc: workMypc,
  wadaff: workWadaff,
};
