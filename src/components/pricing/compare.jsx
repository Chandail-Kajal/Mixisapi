import React from "react";

const CompareSection = () => {
  const otherPlatforms = [
    {
      name: "Wati",
      price: "₹85,000",
      src: "https://mittosapi.com/assets/Wati-logo-green-Xkgz8q6m.svg",
    },
    {
      name: "AiSensy",
      price: "₹80,000",
      src: "https://mittosapis.com/assets/Aisensy-DlxB96tQ.jpeg",
    },
    {
      name: "Interakt",
      price: "₹48,000",
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAY1BMVEX///8ApouJzL6u29Ly+/oAn4IAooY0sZoAm3v4/Pyn2c5buqbU7Ofq9/Xf8e3a7uqExrYsrJRnwK5EtJ6Sz8K14NdwwbBUtaBRuaVOsZo6rJOd1Mgrp4weqpDI6OF+yLkAk3DKtKhUAAAEHElEQVR4nO2cbXuqMAyGV6ERyosDBd9l//9XHrCw4xQK9UpaP+T5smuj6+6FNk0g8euLxWKxWCwWi8WaV5jnm02ehb45zNqo73JbXK/FtvxWG980U4qrwwVaiVbd18u+in0zjSgMrvLO+F8gRfBxS+CWPGNq1OTmm+yvFIxg6jWgfLM9KG7kA5nW7w9k8zkrtRyw2lWZrFQQqF0ifpcClL75Bq0Ge8JaZb354kytB1K58ss3SPVAcAz+Xgi2w5WPWKebYliL2fOlbFi7xSc4/95scjd2cadJYeua6lVVpFFGOVtS/W9ElVuqV8VHzVlP+KC41qRH3z6q6nf25FEZ9gM8m7Q3mDRgVNJockfKC71XDLFHeN9tUOTuqEaUanOdTWPO2uh+oxPtforUNCYtpt2XMyV3a+1fXP2jsv3d6okrplEtijp6D+WGaEI675gJOlZ6lBuiCf1EneZA74N+nAC9KA5TVR+KsFOsrmuDrkHcDcqLQ63S0K07TVUJURsZR9rnHCbykD7IO9wHKdnG1RGUgdFF4GI2xZBqrLv47SxNnK1n6sLRtI8GAYrGDWqWPCZykNQnoz3vg07No9EBEqM/Q1GsxF+uqfTzCfX5W0W8VuNyEdcC8pKUND8icXYZFmGUks4vRwvSE9meyjA5O1KiLZXtUTlbUnMw87YaZM6WtKHgrNA5W1KCTCom4GxJ8Z3UigYU/bFUfqLgFOKE7U3PJAadywvtFW6pQE2Z9htKZyK59yVxz6eGDhTXl16pOIUoMDlDMoO2JsVcpCnRVuoEmIs0oAQN5v/+Yp3pOIXA9KQ056cW6inKoAzKoAzKoAzKoAzKoAzKoAzKoAzKoAzqBxSktbyAQvMVWurLC6is7ecZvTHkFn2jxnrs3tODrq2nySIfoG9UXN38gEbWL912Xm69rhKyUjIyi4tbb7vtx9+nOjiZjpYFDNXYJC5ALRsWhgJyD6Cl1buszahBnQQlYFW3XI+//nMCavMeMx9zoo5AhVz+1m1ihbqKR0+L22rU1BRuQCFZuJ/SiQmcRfgLa6zC6Wo5V6nIokaALJmewFnOBKvZIqvcwCkEZsuDMbmbPfPNVaeoBUXmLBQSY8BXFebfxux2mUmXQajJzZ/PFfhIzFqy2bweknHXH+5mi2NRWzPmH0AArIPsaVfF+eoy/4sHt6CtpKiDW657LOJsczsfYEEVksUpjAV6r8nfJvV3qzo5La3QRy0ftnj29NINPjMct2mQ8CEZbvEwGSjscasyyUCxexupQNE/I4AIFK7YFc5UoOhl+DSg9s+E/IDKb3ROElDYEbRe4YMSfdAKOihcaT4YABkUoCbquUIFbcNBsl57PFCIoEnpGhhXgCAhLqdtfSNts0wDBFVVSt9gy2KxWCwWi8Vikegf53VAjEhp9fgAAAAASUVORK5CYII=",
    },
  ];

  const logos = [
    {
      src: "https://mittosapi.com/assets/Wati-logo-green-Xkgz8q6m.svg",
      alt: "wati",
    },
    {
      src: "https://mittosapi.omc/assets/Aisensy-DlxB96tQ.jpeg",
      alt: "aisensy",
    },
    {
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAY1BMVEX///8ApouJzL6u29Ly+/oAn4IAooY0sZoAm3v4/Pyn2c5buqbU7Ofq9/Xf8e3a7uqExrYsrJRnwK5EtJ6Sz8K14NdwwbBUtaBRuaVOsZo6rJOd1Mgrp4weqpDI6OF+yLkAk3DKtKhUAAAEHElEQVR4nO2cbXuqMAyGV6ERyosDBd9l//9XHrCw4xQK9UpaP+T5smuj6+6FNk0g8euLxWKxWCwWi8WaV5jnm02ehb45zNqo73JbXK/FtvxWG980U4qrwwVaiVbd18u+in0zjSgMrvLO+F8gRfBxS+CWPGNq1OTmm+yvFIxg6jWgfLM9KG7kA5nW7w9k8zkrtRyw2lWZrFQQqF0ifpcClL75Bq0Ge8JaZb354kytB1K58ss3SPVAcAz+Xgi2w5WPWKebYliL2fOlbFi7xSc4/95scjd2cadJYeua6lVVpFFGOVtS/W9ElVuqV8VHzVlP+KC41qRH3z6q6nf25FEZ9gM8m7Q3mDRgVNJockfKC71XDLFHeN9tUOTuqEaUanOdTWPO2uh+oxPtforUNCYtpt2XMyV3a+1fXP2jsv3d6okrplEtijp6D+WGaEI675gJOlZ6lBuiCf1EneZA74N+nAC9KA5TVR+KsFOsrmuDrkHcDcqLQ63S0K07TVUJURsZR9rnHCbykD7IO9wHKdnG1RGUgdFF4GI2xZBqrLv47SxNnK1n6sLRtI8GAYrGDWqWPCZykNQnoz3vg07No9EBEqM/Q1GsxF+uqfTzCfX5W0W8VuNyEdcC8pKUND8icXYZFmGUks4vRwvSE9meyjA5O1KiLZXtUTlbUnMw87YaZM6WtKHgrNA5W1KCTCom4GxJ8Z3UigYU/bFUfqLgFOKE7U3PJAadywvtFW6pQE2Z9htKZyK59yVxz6eGDhTXl16pOIUoMDlDMoO2JsVcpCnRVuoEmIs0oAQN5v/+Yp3pOIXA9KQ056cW6inKoAzKoAzKoAzKoAzKoAzKoAzKoAzKoAzqBxSktbyAQvMVWurLC6is7ecZvTHkFn2jxnrs3tODrq2nySIfoG9UXN38gEbWL912Xm69rhKyUjIyi4tbb7vtx9+nOjiZjpYFDNXYJC5ALRsWhgJyD6Cl1buszahBnQQlYFW3XI+//nMCavMeMx9zoo5AhVz+1m1ihbqKR0+L22rU1BRuQCFZuJ/SiQmcRfgLa6zC6Wo5V6nIokaALJmewFnOBKvZIqvcwCkEZsuDMbmbPfPNVaeoBUXmLBQSY8BXFebfxux2mUmXQajJzZ/PFfhIzFqy2bweknHXH+5mi2NRWzPmH0AArIPsaVfF+eoy/4sHt6CtpKiDW657LOJsczsfYEEVksUpjAV6r8nfJvV3qzo5La3QRy0ftnj29NINPjMct2mQ8CEZbvEwGSjscasyyUCxexupQNE/I4AIFK7YFc5UoOhl+DSg9s+E/IDKb3ROElDYEbRe4YMSfdAKOihcaT4YABkUoCbquUIFbcNBsl57PFCIoEnpGhhXgCAhLqdtfSNts0wDBFVVSt9gy2KxWCwWi8Vikegf53VAjEhp9fgAAAAASUVORK5CYII=",
      alt: "interakt",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compare &amp; Save with{" "}
            <span className="text-green-600">MittosAPI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get more value with our all-in-one platform at a fraction of the
            cost
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative">
          <div
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            // style="opacity: 1; transform: none;"
          >
            <div className="bg-gray-900 text-white p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Other Platforms</h3>
                  <p className="text-gray-300">
                    For the same features as MittosAPI
                  </p>
                </div>
                <div className="flex items-center -space-x-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300"
                    // style="z-index: 10;"
                  >
                    <img
                      src="https://mittosapi.com/assets/Wati-logo-green-Xkgz8q6m.svg"
                      alt="wati"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300"
                    // style="z-index: 9;"
                  >
                    <img
                      src="https://mittosapi.com/assets/Aisensy-DlxB96tQ.jpeg"
                      alt="aisensy"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300"
                    // style="z-index: 8;"
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAY1BMVEX///8ApouJzL6u29Ly+/oAn4IAooY0sZoAm3v4/Pyn2c5buqbU7Ofq9/Xf8e3a7uqExrYsrJRnwK5EtJ6Sz8K14NdwwbBUtaBRuaVOsZo6rJOd1Mgrp4weqpDI6OF+yLkAk3DKtKhUAAAEHElEQVR4nO2cbXuqMAyGV6ERyosDBd9l//9XHrCw4xQK9UpaP+T5smuj6+6FNk0g8euLxWKxWCwWi8WaV5jnm02ehb45zNqo73JbXK/FtvxWG980U4qrwwVaiVbd18u+in0zjSgMrvLO+F8gRfBxS+CWPGNq1OTmm+yvFIxg6jWgfLM9KG7kA5nW7w9k8zkrtRyw2lWZrFQQqF0ifpcClL75Bq0Ge8JaZb354kytB1K58ss3SPVAcAz+Xgi2w5WPWKebYliL2fOlbFi7xSc4/95scjd2cadJYeua6lVVpFFGOVtS/W9ElVuqV8VHzVlP+KC41qRH3z6q6nf25FEZ9gM8m7Q3mDRgVNJockfKC71XDLFHeN9tUOTuqEaUanOdTWPO2uh+oxPtforUNCYtpt2XMyV3a+1fXP2jsv3d6okrplEtijp6D+WGaEI675gJOlZ6lBuiCf1EneZA74N+nAC9KA5TVR+KsFOsrmuDrkHcDcqLQ63S0K07TVUJURsZR9rnHCbykD7IO9wHKdnG1RGUgdFF4GI2xZBqrLv47SxNnK1n6sLRtI8GAYrGDWqWPCZykNQnoz3vg07No9EBEqM/Q1GsxF+uqfTzCfX5W0W8VuNyEdcC8pKUND8icXYZFmGUks4vRwvSE9meyjA5O1KiLZXtUTlbUnMw87YaZM6WtKHgrNA5W1KCTCom4GxJ8Z3UigYU/bFUfqLgFOKE7U3PJAadywvtFW6pQE2Z9htKZyK59yVxz6eGDhTXl16pOIUoMDlDMoO2JsVcpCnRVuoEmIs0oAQN5v/+Yp3pOIXA9KQ056cW6inKoAzKoAzKoAzKoAzKoAzKoAzKoAzKoAzqBxSktbyAQvMVWurLC6is7ecZvTHkFn2jxnrs3tODrq2nySIfoG9UXN38gEbWL912Xm69rhKyUjIyi4tbb7vtx9+nOjiZjpYFDNXYJC5ALRsWhgJyD6Cl1buszahBnQQlYFW3XI+//nMCavMeMx9zoo5AhVz+1m1ihbqKR0+L22rU1BRuQCFZuJ/SiQmcRfgLa6zC6Wo5V6nIokaALJmewFnOBKvZIqvcwCkEZsuDMbmbPfPNVaeoBUXmLBQSY8BXFebfxux2mUmXQajJzZ/PFfhIzFqy2bweknHXH+5mi2NRWzPmH0AArIPsaVfF+eoy/4sHt6CtpKiDW657LOJsczsfYEEVksUpjAV6r8nfJvV3qzo5La3QRy0ftnj29NINPjMct2mQ8CEZbvEwGSjscasyyUCxexupQNE/I4AIFK7YFc5UoOhl+DSg9s+E/IDKb3ROElDYEbRe4YMSfdAKOihcaT4YABkUoCbquUIFbcNBsl57PFCIoEnpGhhXgCAhLqdtfSNts0wDBFVVSt9gy2KxWCwWi8Vikegf53VAjEhp9fgAAAAASUVORK5CYII="
                      alt="inerakt"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300"
                    // style="z-index: 7;"
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAXVBMVEX4+Pj///8os3kArW37+/scsXX7/v0ArWzT7eFDuobk9O2b17va8OZHu4iT1LVOvYzJ6drv+fSh2b86uIJawJPs9/KV1Lf2/Powtn3O693X7+NlxJnh8+tXwJEcsXazdLTKAAAC9ElEQVR4nO3d23KbMBRG4RiBSe2kTZO0qd2G93/MYtcHTsboLxIzW2td7smNvpEAO5Pw8EBERERERERERERERERERETGyvPVf5fnS68iajOINeyWXk2cZjVLRS4AWgJwYdAOLb2ykIVTM+wW6ICeM3pQA6sZdQuuZtMtvJrF61sMNXtuEY7oIWvHNI6ate0WabNZ226x1Gxtt2ibzdZ2i6dmarvBphTxjFo6pbBJxVQzdEphk4JNCjYp2KRgU4r6/GHnCQQ2KdikYJOCTQo2Kdik5mH7mDiDrdnX4ntvtnUb2MbVXJF13bauKgbcYGuoZVnXbVvPhtxga6od3H40Zq/H2YAbbC21LHPvXbXa8hm2cbXi27qv9mXd/XHYOmrX2YgabJIabJIabHU/vdVgk9RgG1Yrx9VgG7yu3VNLnm1U7e2WWups/vdQ2HS1tNlktaTZlCcP2PS9Zpxt9FcDH78K4ckjAbZdue/N9uXLxe2t8H/ysM+2c5Xruj25qu3W/AZy66aqGWbbHRDcY2u2P84abq6x17YTr2um2Xb/EFpu+9Ps6vZbUzPLti6rrOu2Ls6zl1UvLzWzbPVVLOu5/bnt5qdml+18Iqe5eaoZZrux306zsuXmcQ81zzbs5gbcvNVMs41f365u/mq22a5u5YjbRe15sppxtsH9tmnfFxQ162z33SQ182x33HZTvylKjW3crSgktQTYxt00tRTY7rt5qyXBdnFrfiXZcPNXS4Pt5FZ8NmfX65vXPTQltqNb8d6endwUtVTYareuWu1WVaJaMmyrp8/+rN5vmlo6bINtnP/dALb6c/3gX1TBFijYYIPNN9ikYJOCTQo2rbhsS692tmCTgk0KNinYpGCT4v/uSsGmFZNt6bXOGGxSvC9BKx7b0iudNd4FoxWLbel1zhzvudKKw7b0KucPNS3UpHg/qRZvwxULqbb02kKGmhbvlRcLAGcf7discomYncpnsMvTIiMiIiIiIiIiIiIiIiIiIkqiv+2LQ/FZM8E0AAAAAElFTkSuQmCC"
                      alt="doubletick"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-green-400/40 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,128,0.6)] transition duration-300"
                    // style="z-index: 6;"
                  >
                    <img
                      src="data:image/png;base64,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"
                      alt="gallabox"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 text-sm font-medium text-gray-500 border-b pb-3 mb-4">
                <p>Platform</p>
                <p className="text-right">Yearly Cost</p>
              </div>
              <div className="space-y-4">
                <div
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100"
                  //   style="opacity: 1; transform: none;"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://mittosapi.com/assets/Wati-logo-green-Xkgz8q6m.svg"
                        alt="WATI"
                        className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow"
                      />
                      <span className="font-semibold text-gray-800 capitalize">
                        Wati
                      </span>
                    </div>
                    <p className="font-bold text-lg text-gray-900">₹85,000</p>
                  </div>
                </div>
                <div
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100"
                  //   style="opacity: 1; transform: none;"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://mittosapi.com/assets/Aisensy-DlxB96tQ.jpeg"
                        alt="AISENSY"
                        className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow"
                      />
                      <span className="font-semibold text-gray-800 capitalize">
                        AiSensy
                      </span>
                    </div>
                    <p className="font-bold text-lg text-gray-900">₹80,000</p>
                  </div>
                </div>
                <div
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100"
                  //   style="opacity: 1; transform: none;"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAY1BMVEX///8ApouJzL6u29Ly+/oAn4IAooY0sZoAm3v4/Pyn2c5buqbU7Ofq9/Xf8e3a7uqExrYsrJRnwK5EtJ6Sz8K14NdwwbBUtaBRuaVOsZo6rJOd1Mgrp4weqpDI6OF+yLkAk3DKtKhUAAAEHElEQVR4nO2cbXuqMAyGV6ERyosDBd9l//9XHrCw4xQK9UpaP+T5smuj6+6FNk0g8euLxWKxWCwWi8WaV5jnm02ehb45zNqo73JbXK/FtvxWG980U4qrwwVaiVbd18u+in0zjSgMrvLO+F8gRfBxS+CWPGNq1OTmm+yvFIxg6jWgfLM9KG7kA5nW7w9k8zkrtRyw2lWZrFQQqF0ifpcClL75Bq0Ge8JaZb354kytB1K58ss3SPVAcAz+Xgi2w5WPWKebYliL2fOlbFi7xSc4/95scjd2cadJYeua6lVVpFFGOVtS/W9ElVuqV8VHzVlP+KC41qRH3z6q6nf25FEZ9gM8m7Q3mDRgVNJockfKC71XDLFHeN9tUOTuqEaUanOdTWPO2uh+oxPtforUNCYtpt2XMyV3a+1fXP2jsv3d6okrplEtijp6D+WGaEI675gJOlZ6lBuiCf1EneZA74N+nAC9KA5TVR+KsFOsrmuDrkHcDcqLQ63S0K07TVUJURsZR9rnHCbykD7IO9wHKdnG1RGUgdFF4GI2xZBqrLv47SxNnK1n6sLRtI8GAYrGDWqWPCZykNQnoz3vg07No9EBEqM/Q1GsxF+uqfTzCfX5W0W8VuNyEdcC8pKUND8icXYZFmGUks4vRwvSE9meyjA5O1KiLZXtUTlbUnMw87YaZM6WtKHgrNA5W1KCTCom4GxJ8Z3UigYU/bFUfqLgFOKE7U3PJAadywvtFW6pQE2Z9htKZyK59yVxz6eGDhTXl16pOIUoMDlDMoO2JsVcpCnRVuoEmIs0oAQN5v/+Yp3pOIXA9KQ056cW6inKoAzKoAzKoAzKoAzKoAzKoAzKoAzKoAzqBxSktbyAQvMVWurLC6is7ecZvTHkFn2jxnrs3tODrq2nySIfoG9UXN38gEbWL912Xm69rhKyUjIyi4tbb7vtx9+nOjiZjpYFDNXYJC5ALRsWhgJyD6Cl1buszahBnQQlYFW3XI+//nMCavMeMx9zoo5AhVz+1m1ihbqKR0+L22rU1BRuQCFZuJ/SiQmcRfgLa6zC6Wo5V6nIokaALJmewFnOBKvZIqvcwCkEZsuDMbmbPfPNVaeoBUXmLBQSY8BXFebfxux2mUmXQajJzZ/PFfhIzFqy2bweknHXH+5mi2NRWzPmH0AArIPsaVfF+eoy/4sHt6CtpKiDW657LOJsczsfYEEVksUpjAV6r8nfJvV3qzo5La3QRy0ftnj29NINPjMct2mQ8CEZbvEwGSjscasyyUCxexupQNE/I4AIFK7YFc5UoOhl+DSg9s+E/IDKb3ROElDYEbRe4YMSfdAKOihcaT4YABkUoCbquUIFbcNBsl57PFCIoEnpGhhXgCAhLqdtfSNts0wDBFVVSt9gy2KxWCwWi8Vikegf53VAjEhp9fgAAAAASUVORK5CYII="
                        alt="INTERAKT"
                        className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow"
                      />
                      <span className="font-semibold text-gray-800 capitalize">
                        Interakt
                      </span>
                    </div>
                    <p className="font-bold text-lg text-gray-900">₹48,000</p>
                  </div>
                </div>
                <div
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100"
                  //   style="opacity: 1; transform: none;"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAXVBMVEX4+Pj///8os3kArW37+/scsXX7/v0ArWzT7eFDuobk9O2b17va8OZHu4iT1LVOvYzJ6drv+fSh2b86uIJawJPs9/KV1Lf2/Powtn3O693X7+NlxJnh8+tXwJEcsXazdLTKAAAC9ElEQVR4nO3d23KbMBRG4RiBSe2kTZO0qd2G93/MYtcHTsboLxIzW2td7smNvpEAO5Pw8EBERERERERERERERERERETGyvPVf5fnS68iajOINeyWXk2cZjVLRS4AWgJwYdAOLb2ykIVTM+wW6ICeM3pQA6sZdQuuZtMtvJrF61sMNXtuEY7oIWvHNI6ate0WabNZ226x1Gxtt2ibzdZ2i6dmarvBphTxjFo6pbBJxVQzdEphk4JNCjYp2KRgU4r6/GHnCQQ2KdikYJOCTQo2Kdik5mH7mDiDrdnX4ntvtnUb2MbVXJF13bauKgbcYGuoZVnXbVvPhtxga6od3H40Zq/H2YAbbC21LHPvXbXa8hm2cbXi27qv9mXd/XHYOmrX2YgabJIabJIabHU/vdVgk9RgG1Yrx9VgG7yu3VNLnm1U7e2WWups/vdQ2HS1tNlktaTZlCcP2PS9Zpxt9FcDH78K4ckjAbZdue/N9uXLxe2t8H/ysM+2c5Xruj25qu3W/AZy66aqGWbbHRDcY2u2P84abq6x17YTr2um2Xb/EFpu+9Ps6vZbUzPLti6rrOu2Ls6zl1UvLzWzbPVVLOu5/bnt5qdml+18Iqe5eaoZZrux306zsuXmcQ81zzbs5gbcvNVMs41f365u/mq22a5u5YjbRe15sppxtsH9tmnfFxQ162z33SQ182x33HZTvylKjW3crSgktQTYxt00tRTY7rt5qyXBdnFrfiXZcPNXS4Pt5FZ8NmfX65vXPTQltqNb8d6endwUtVTYareuWu1WVaJaMmyrp8/+rN5vmlo6bINtnP/dALb6c/3gX1TBFijYYIPNN9ikYJOCTQo2rbhsS692tmCTgk0KNinYpGCT4v/uSsGmFZNt6bXOGGxSvC9BKx7b0iudNd4FoxWLbel1zhzvudKKw7b0KucPNS3UpHg/qRZvwxULqbb02kKGmhbvlRcLAGcf7discomYncpnsMvTIiMiIiIiIiIiIiIiIiIiIkqiv+2LQ/FZM8E0AAAAAElFTkSuQmCC"
                        alt="DOUBLETICK"
                        className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow"
                      />
                      <span className="font-semibold text-gray-800 capitalize">
                        DoubleTick
                      </span>
                    </div>
                    <p className="font-bold text-lg text-gray-900">₹50,000</p>
                  </div>
                </div>
                <div
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-all duration-300 border border-gray-100"
                  //   style="opacity: 1; transform: none;"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8zZPosYPohW/q1wv28yf0zZfrv8/9tivswYvoeWfooXvolXPr3+f/09/8rX/qqu/3h5/5CbvoVVvrq7/49a/rX4P64xv1gg/uDnfyOpfyYrfxlh/tcgPtzkftRePvM1/2dr/xMdfusvf3c4/7Q2f52k/vG0v0+bPqSqPyitPzn6/59mfzCz/13IO75AAAGoklEQVR4nO2d63aiMBCAgeAlAUFFVLTe23qr7/96C92qZEArkEDSM9/ZP3tsm3wyhCTAjGEgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCNII3np32px2a6/pjsjhfJoyRlzHJYxMT6OmuyOcUeQQal6hhM46TXdJLH3fuft945j9pjslkI8tM7Ow7bjpjgliFBGaI5jEavQnQnVnurl+iaLTnjTdvcqMcwP07shW7013sRJeFMAAzfw/mGl8ebRDBwygjCX/eEs31DVUByswwjj+ZtwzeuM5cbkPKFmcm+5sCbwZCFDfml8/6818n/vMCo69JjtbhknIj6CUdQepj9/fAj5+ybDVWF/LMHhjfBy6bSgwMflzFHwFinMkFh+EZJYNwl4Efson85y/pSKXEAwk7C3/mjde8NdKSg77mvtahkGXgRH0ycXANuHZulR+VJ07/ChJg+jZKNn7giOus6mtr2XYhwRe6X6blI1XMFRDdUP1vAQHxGnbL/zajoJRNfhUdAdgA3vKXlwcjb7gqWueJPe1DPshWCQVWeB+DAn/y+72Q2JfyzD6BAHqtottUpzgBCD4VGp1fAIBagVR0VMpG6pUnY2cDzAcxgG6LvFn9kPgyFZqbOR0lsK+/A28mLIvBZYcOwecQKTCCTTKfFv+K9cbmXws+EGQsm216/Uejqps0eSo2oP7hD6rvjyYB3Bh8nTeJxXbBSMoW4qYjJzB3J06fjOrY68bgEXSUNSE8gJDNVg2cBgHQ3AAyUZcL3pHxoeqs6p9qjowuS5QNhW7sBst+FC1wpoVvSHXvithH6l14Ca61rDeQH1Lh6jF5jJa947cie4sJbTxkF1qmkaDqaxNsvdV2pHVOKJ64b1hN7xIbGmSui9Aa4zTTWowl7xZ7aUmFaS2xUYvdQjl36teU3o7iLLbunJJL5bIai25ufHtKAZ1TVE/uTUODYTM1Z4wuX6jTiS3oRvwJqdPJG8cLWi9YToCt42+10wyB1SjdT2IQT2j6TrnzjxlXYnb8Z3bJbGebY1W7rMHPpEysfnPNUxZPdvhNskzNCkZSgvV7s80v6ZpzQNDmaGqimEcqsFMSpPqGMp6dEQlw2QtLP4pJ6UMv+/ai37KSTHD5MkLwaGqmmFMMBV6bVbQ0LTcSGCoqmgYj6qOuFsOahomd8dEredUNUwecxazdFTWUNiNXIUN404dBISq0obJMweV5+NqGyahWnWXQ3XD5L5GtaWr+oZxqFZaOmpgGC8daYX7i1oYJo9yl97l0MQweVi45FxVF8PkccxySw59DE3LKaWokaFJaZmZqk6GprUq0aRWhiYp8ai6XoYmLf5kn2aG7rFwk5oZUrdwk5oZmmxdtEndDIuHqW6GdFG0Se0MD0Wb1M3QbBedgOtnWPSKiIaCQUM0RMMc0FAwaIiGaJgDGgoGDdEQDXNAQ8GgIRqiYQ41G+a/byHV8Pa+hdRXc27kvTMj17DT/vnFmt6Zyb73JNvwUvN7T0ZVwcKG0+u7a6EcoQxf/nMB0Yb27f1DOe+rZLlUPRGLGabeIV1LMoJw7wFLN9zf3wPeSlOCzCteEQsYdqJ7EkZWX46zTrvaQXzdMJ0DlIY1Jhy2q52JrxryyTHrzKkA8mJIMvRmXAqXevNiGN7Qeth/QYZ22GhuE2PQrqD4guFgwaegstr1p+DZlg/UXw29TI6hbQPpMD2YzlmcYesAU5p1m0n3ZVNYtEKI4fktk8SvsaTtXuSWOhufGh4VytdmJDn3ylwZnxheYICSRdPpIW2r+Ijz0PDcBUn8XNp03sSYzicrejY+Mjxlc1+qURkik7+0nOH+AL4qokj+0oR+sVDNMzzDPL2KFRPK5BEuapjN06tcyus1zOZYxDCTC5oolws64URf3b8BhiOYel7NfN4xI1g04DXDfibRtezUWhWAefVfMByvQJ5e1UtAwHTOvxh62doIigbonQGcljwzzNS3IOrXt4hptd1fHH8MxzCRtMqFH3hm5Hmofhv2IrDK9Unxl2kaA9YKyjG06dNySerTCh9WzIsNe+9TWO/poFe9J+O7Ztej1TFtRxZY5WpYs8vIbpelFH1QjUZwIun6mMDaebnoWzvPyK1/CLGYzvUPjWyxIwj7tVyS+uzo365DGtOBFWRugkRkPrBGyS+3qkoZGTH0fRiqrqXUNkx1OhHl6nKbfyZA74z6C8KIk9RWZ9O+uqv4Snjr3Wlzstd/7/AhCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiCb8A2IDaQBd/TlqAAAAAElFTkSuQmCC"
                        alt="GALLABOX"
                        className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow"
                      />
                      <span className="font-semibold text-gray-800 capitalize">
                        Gallabox
                      </span>
                    </div>
                    <p className="font-bold text-lg text-gray-900">₹2,12,000</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Average Cost</p>
                    <p className="text-2xl font-bold text-gray-900">₹56,800</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">For Basic Features</p>
                    <p className="text-sm text-red-500">+ Additional Costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-green-200 animate-pulse">
              VS
            </div>
          </div>

          <div
            className="relative"
            //   style="opacity: 1; transform: none;"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
              MOST POPULAR
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl overflow-hidden border border-green-500/30 h-full">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                      MittosAPI
                    </h3>
                    <p className="text-emerald-100">All-in-one solution</p>
                  </div>
                  <div className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                    BEST VALUE
                  </div>
                </div>
                <div className="mb-8">
                  <div className="flex items-center justify-center rounded-full p-1 max-w-xs mx-auto mb-6">
                    <button className="px-6 py-2 rounded-full text-sm font-medium bg-emerald-500 text-white">
                      Yearly (Save 30%)
                    </button>
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-5xl font-bold text-white mb-2">
                      ₹7,999
                      <span className="text-lg font-normal text-gray-400">
                        /year
                      </span>
                    </p>
                    <p className="text-emerald-300 text-sm">
                      {`That's just ₹833/month`}
                    </p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-6">
                    <a href="/forms" data-discover="true">
                      <p className="text-emerald-300 text-sm font-medium text-center">
                        🎁 Satrt FREE Trial
                      </p>
                    </a>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 bg-emerald-500/20 rounded-full text-emerald-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-zap w-5 h-5"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        User-friendly + affordable pricing
                      </p>
                      <p className="text-sm text-gray-400">
                        Intuitive interface with cost-effective plans
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 bg-emerald-500/20 rounded-full text-emerald-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-square w-5 h-5"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        Unlimited No-code Automation + Chatbot
                      </p>
                      <p className="text-sm text-gray-400">
                        Powerful automation without any coding required
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 bg-emerald-500/20 rounded-full text-emerald-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bar-chart2 w-5 h-5"
                      >
                        <line x1="18" x2="18" y1="20" y2="10"></line>
                        <line x1="12" x2="12" y1="20" y2="4"></line>
                        <line x1="6" x2="6" y1="20" y2="14"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        WhatsApp CRM with Sales Tracking
                      </p>
                      <p className="text-sm text-gray-400">
                        Complete customer relationship management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 bg-emerald-500/20 rounded-full text-emerald-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users w-5 h-5"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        Team Inbox &amp; Task Automation
                      </p>
                      <p className="text-sm text-gray-400">
                        Collaborate efficiently with your team
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 bg-emerald-500/20 rounded-full text-emerald-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-send w-5 h-5"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z"></path>
                        <path d="M22 2 11 13"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">
                        Broadcasting at Scale
                      </p>
                      <p className="text-sm text-gray-400">
                        Reach thousands with a single click
                      </p>
                    </div>
                  </div>
                </div>
                <a href="https://u.payu.in/wrm19aliYhM0">
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-zap w-5 h-5"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                    Get Started - Save 80% Today
                  </button>
                </a>
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-400">Start Free Trial</p>
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 border-t border-gray-700">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield w-4 h-4 text-emerald-400"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                  <span>Trusted by 50,000+ businesses worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
