
import { TimelineEvent, WeddingEvent } from './types';

export const COLORS = {
  primary: '#e8306e',
  swatches: [
    { color: 'rgb(232, 48, 110)', label: 'Hot Pink' },
    { color: 'rgb(252, 228, 236)', label: 'Pale Pink' },
    { color: 'rgb(216, 27, 96)', label: 'Deep Pink' },
    { color: 'rgb(136, 14, 79)', label: 'Burgundy' },
    { color: 'rgb(248, 187, 208)', label: 'Rose' },
  ]
};

export const TIMELINE: TimelineEvent[] = [
  {
    date: 'June 15, 2018',
    title: 'The First Meeting',
    description: 'It all started at "The Daily Grind" coffee shop. Jane ordered a vanilla latte, John ordered a black coffee, and they accidentally grabbed each other\'s cups. One awkward apology and three hours of conversation later, neither wanted to leave.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUMu_SZXYAjfKr9l7ihEX8ip1-d9KoT7VuIA7quIbCAAP4OYUfK6gRIVD-8AejyEV-yhYgzCaqz98MhOYnaWH2spgPtmEKreKq1BZN0L2ljlQQ5RDqK40PdFERA2vFAiFZ87a0FuATXBZNpit-C_YEQQPdyzYc7Mh0k1z8qEz62XAXhSTccktQsLwyURp3SKOB109iq35YFbnDna7ISA1dTDhpkhreNz5-MBGzNqLyvqAevUN2o_JS4-wIiLGP5ce5Bqbi8NVRgjJz',
    icon: 'local_cafe'
  },
  {
    date: 'December 2019',
    title: 'Trip to Kyoto',
    description: 'Our first big trip together tested our navigation skills and our ability to order food in a foreign language. Wandering through the bamboo forests of Arashiyama, we realized this was the first of many adventures we wanted to take together.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw5pPhdqsRTN7YmXr7qbyAdStRECTJ2EOd1ynQotBCH29217F6f5Jgm1vRdZ3XMwa9JHAAuJrMuqrRlPNRahxxPZQJqnzvvMrxfCpmvEspM0VP1HqdtwRMQVgPUYZ7cE9ia1TFIRir6bdwwcVIxspi39-gN3mj-X3lfYqFNc32u9XHWBITGgyyTAOsomvgAcUIfu0zufLIH7KwBhUN7rVaDtfi24UaZhF5XOFy1q0HIE31Op2JEiSE21ETVRUGgaxfywfWLS97QgvB',
    icon: 'flight_takeoff'
  },
  {
    date: 'August 2020',
    title: 'Our First Home',
    description: 'We signed the lease, packed way too many boxes, and officially moved in together. We learned that John owns too many guitars and Jane owns too many plants, but we made it work perfectly.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl_c1TmZB5VPofx0Qtx43dphBdDi76CuqRJgHyNeD-jRUDgeQHq4Mbrm0yS5LcYAfhg04lGt-zgcwrkWeZeYU7PGOyQDf_27q81MwnPj9sDbvPjM9L860CgJZgHQ0YxrsQF8uZDOl4BFt2strCA0vOV4JqMQ1kbrroIA4I-lY1vzKt6Po5qNyQE_sryi6Y0i-BUht_HrwW2UItz1zBpZ8sen6WhyW-7gEoe14OzlfqZePJnajpZiR91-2mYQBOuR8dYHyY8weURMr',
    icon: 'home'
  }
];

export const EVENTS: WeddingEvent[] = [
  {
    type: 'Ceremony',
    name: 'Varadha Raja Cinemas',
    timeRange: '4:00 PM – 5:00 PM',
    location: 'Kanchipuram, TN',
    address: 'Varadharaja Theatre Rd, Kanchipuram, Tamil Nadu 631501',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_xtaK_lCDBRi1o4dBKMmxAVCnjbiTlwkRcBKkTi91Hdnb-pTKRcXtZunbDVYpX-2wKyDLgBxrAFmFUXgw7sWFn1JH6tayRTVdOrT5HLkvJbnPPhAMj_PaQr6pOYmvgGWIQVhY7LsBe36CjedHc_et02zMbjg-dX50NG5qZZ9egSvC4OGiP3lBQcYwtkwKh3_Xuf7JrNN_vSt_4U4nKUqCZ_pP3SjY3TI2wOS8vo97iNmKqF8kkQq4Rlh-d8UeNpMCxAxYYtMRXu4W',
    icon: 'theaters'
  },
  {
    type: 'Reception',
    name: 'Varadha Raja Cinemas',
    timeRange: '6:00 PM onwards',
    location: 'Kanchipuram, TN',
    address: 'Varadharaja Theatre Rd, Kanchipuram, Tamil Nadu 631501',
    description: 'Dinner, Dancing & Celebration',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvBTFR02y0xtjcYRVMmL6QIfgPvm2G1j7ewGDGGXkNrH4QPGWRXmuz9JK7TDRkiv5TRME5bnWjXuleqDkmmCfD5t98E-TIYdzpbLX5d4mRZe5ycy-ci60SaAk_xvyKznWd_nmaWKRzQ7LpabhT1cBLJLJN9zXiRMF_NXUOU1PGqBNUOq2F9drOMb8i8qKN6EmxDObFA6jJHaRT-5xYTdS3_lkSM3W9YyRSY_9dhg4_brBJGtarZ_K8eAoQOH1Xw8upnqO-gcnyyxSl',
    icon: 'celebration'
  }
];

export const MAP_LINK = 'https://maps.app.goo.gl/qpeEooZKnVSqmQ2K7';

export const IMAGES = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvScOFOvVcXTNWicLBP_l_2k1napTC3ZhEfqc-NmWPs6c4RM3HsX3es9UKOQV9N8wuPbHwXGYt9X8TXc8b_f8huMdRud1TvdLMeJcpj41hP7kLvfuNPk5GmOrmAx_fHZFJv11qiMApoQ_4b42438tKl4w_q-ETMvDGz6XUkrRDP_ZfyxKWLN4nc2XmhsRDg-p8g50nUikC2pAXu7gYsISOmv6MNaFPHRMYZKjTKuY8SaNuOxIUFxUX5zaYvWiQMQ2CYSU46xCQL6vn',
  proposal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQzEAQ4tBhDUj46XUqI4Ej3EevQeKigYk3qvBYRWLycsGChx3h4qcZUuX16LtAE4Qu2K6IFIhsuONfa3CzY6CUyMpZ5S2KJQdt6XM5d5LoHkTOSMEZaxAoS_Jwpbowp2DltYXD22tWqVVXsPkUc9vdsJc_90VdVwtZRziTVVkIosZTIIXCIb_41J9Rp6A0jIPIjIo0w3M7mB-ngKvK1fKvAZKPVaARwgExKPHD2QnW1JXlewlKei93pjCifD5BBqdRPFwSRTeKrUxl',
  flowers: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIrK_0NtHYj45IeStBt9ars1tHuL3xxwP3HobXORMZgBeBLMV5M1O92IH4TqdM3htIIJTOCQwZPWf4VFBiUa6Le1GLWzkvkJYpbctpD3EnUXlcilkAzLNsg8Koc_ceyIlicegeL96X3KiCsf0kauDLumioNCBWnJdUaIq1EcxpEMCubzqjcAxBmAgWDftFRgwwDMQhqtvr4uxMvq9XGUJEO-lbwrIO_TuuWYZYCadxhnAWI2KYnTviletKsrT8vCJosydD_lFPmR7G',
  map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWBG6BuJgBlaTDOHeze5wLoslU0RD_53-fNhPkQqMbxa-dTjv51MeFDLUFpTmHxaTosu6BiwlJqhe-bTKW961bV5gk76avHiYV9mZIxzaxMUaDrTO52Mlu2uRA-Y5hl5rMOWBSZd5cPQ3ofQmdoN4FOPVenA039ezqfSAr-xHIGnjv0I0WGS5Tmzrrj8Ebrm4Uz8j0tfsaYqVN9rvH8JxcLeJ0KDLknJyuibFq_Y_6tYAe4wk-WMIL7JTzfyFf8bFDNQ-4lGvqDCkC',
  dressCode: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3aVXJVVBIIYVIOwLK9HKE7RjSnHk2yx9m7PVB2dLo5PnnnfGw_YNGTM9ayQJzvodrbQLodYIQSrJgAi4OFXGw6SltirRwLjjltIkAKhM1D7Df5auuCtlkqxeXxAH3ZT2NXNKpHUAWa0tDtgPHDigDF_Cs-P6vrPtdtdyac6s5oV_HtnAdZGSjTlwHFQQCnyiQxwB0O1tuq4ngSvHVb50nm4spUpa6vHSSMHFMXQVOXMei0K_7jfOV0ftmjJRzgJ1JOrmWdG6FW4Wd',
  portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4HN_a5s9tWJ0TOrS7ktjUZOTIC-tJUV5ls_aBu7ZWn0QdZArMUwalhi995a3433XiPXDA81SHXmXqiqAZKIdPFUp3_7RxhQBJ7GZBYly5_dPw9IfnkfiSnIgmlIjrLoOlthoZma4Ic25LZgB56iITwqiAG1O_dRSny7VWRTyWXWpm3oW5bWLeUmDTU8q8LXd7efBTCuB3Z9S9mwQgY_PlaOQ3Lqho4mI3OH1csWDiLvikEohBc3JrS7hGaWhfiE1PZsR7HK7HnqTb',
  tuxedo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfUL5RADlfUf0w69BHUv-TYjshNsg0Q-JN7Fyvv9sDbpgcrEOXl2ga7EnvWEvX5QXHz2Hm2zldH6XUmBAE6kV4L509bHLqEvUdF05pXkcr1X7M6HxGzoJtlszh8hEqUVyaY-FUtzVH48qBhkzfOmhQ8v6iY0jXStUffmXasSZXpgjbRUxC1ay1bED1shIgE-UI_3BfSmM8VCOqb9pc0om2oYevwyoFgZITcmgMc-I522pc3ewhovEuh-aC68_1sC5pbcAL_7eDsDdR',
  silk: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAADN6iqNg0pOtUVx1exZ1Om_c2lmPfK4Yc7IxZpD_Ey0Tw52YtmtdRsY1j1kO1qg-0NEEeEUBcW1Pwz4qhOwnCMubN952Y1dVbzvkIPAuBa4TKByOi0uU6Gwx18oL964-3jLdAK8Zf6rqDXqZObovp6sAfVzvdF1_xUuy3mAolNBHbcMCXvFkZdY94-ZFV-sNmFl2MWknLTz4EhS2PUVJrGUZYz-IZeR4in9ZCdlGdN9ZcszaHSKCZJRjTvT0poRcvaSjKi-v1D0sO'
};
