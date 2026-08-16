import type { StaticImageData } from "next/image";
import ballast from "@/assets/ballast.jpg";
import barbedWire from "@/assets/barbed wire.jpg";
import bindingWire from "@/assets/binding wire.jpg";
import buildersLime from "@/assets/builders lime.jpg";
import buildingSand from "@/assets/building sand.jpg";
import cement from "@/assets/cement.jpg";
import circuitBreaker from "@/assets/circuit breaker.jpg";
import clawHammer from "@/assets/craw harmer.jpg";
import doorHandle from "@/assets/door handle.jpg";
import doorHinge from "@/assets/door hinge.jpg";
import doorLock from "@/assets/door lock.jpg";
import doorsAndWindows from "@/assets/doors and windows.jpg";
import electricCable from "@/assets/electric cable.jpg";
import enamelPaint from "@/assets/enamel paint.jpg";
import gateValves from "@/assets/gate valves.jpg";
import generalHardware from "@/assets/general hardware.jpg";
import gutter from "@/assets/gutter.jpg";
import ironSheet from "@/assets/iron sheet.jpg";
import ledBulb from "@/assets/led bulb.jpg";
import machineCutBlock from "@/assets/machine cut block.jpg";
import padlocks from "@/assets/padlocks.jpg";
import paintBrush from "@/assets/paint brush.jpg";
import paintPrimer from "@/assets/paint primer.jpg";
import paints from "@/assets/paints.jpg";
import plumbing from "@/assets/plumbing.jpg";
import plywood from "@/assets/plywood.jpg";
import pvcElbowFitting from "@/assets/pvc elbow fitting.jpg";
import pvcPipeGlue from "@/assets/pvc pipe glue.jpg";
import pvcPipe from "@/assets/pvc pipe.jpg";
import roofSealant from "@/assets/roof seealant.jpg";
import roofingNails from "@/assets/roofing nails.jpg";
import selfTappingScrew from "@/assets/self tappng screw.jpg";
import spiritLevel from "@/assets/spirit level.jpg";
import steelAndMetal from "@/assets/steel and metal.jpg";
import steelBar from "@/assets/steel bar.jpg";
import structuralTimber from "@/assets/structural timber.jpg";
import switchAndSocket from "@/assets/switch and socket.jpg";
import tapeMeasure from "@/assets/tape measure.jpg";
import tileCement from "@/assets/tile cement.jpg";
import tiles from "@/assets/tiles.jpg";
import timber from "@/assets/timber.jpg";
import tools from "@/assets/tools.jpg";
import treatedPole from "@/assets/treated pole.jpg";
import wallTiles from "@/assets/wall tiles.jpg";
import waterTank from "@/assets/water tank.jpg";
import waterTap from "@/assets/water tap.jpg";
import weldedWireMesh from "@/assets/welded wire mesh.jpg";
import wheelbarrow from "@/assets/wheelbarrow.jpg";

export const productImages: Record<string, StaticImageData> = {
  "portland-cement": cement,
  "machine-cut-blocks": machineCutBlock,
  "building-sand": buildingSand,
  ballast,
  "builders-lime": buildersLime,
  "corrugated-iron-sheets": ironSheet,
  "roofing-nails": roofingNails,
  "galvanized-gutters": gutter,
  "bitumen-roof-sealant": roofSealant,
  "water-storage-tank": waterTank,
  "brass-water-taps": waterTap,
  "pvc-pipe-glue": pvcPipeGlue,
  "electrical-cable": electricCable,
  "switches-and-sockets": switchAndSocket,
  "led-bulbs": ledBulb,
  "circuit-breakers": circuitBreaker,
  "wall-paint": paints,
  "enamel-paint": enamelPaint,
  "paint-primer": paintPrimer,
  "paint-brushes": paintBrush,
  "claw-hammer": clawHammer,
  wheelbarrow,
  "spirit-level": spiritLevel,
  "tape-measure": tapeMeasure,
  "structural-timber": structuralTimber,
  plywood,
  "timber-poles": treatedPole,
  "steel-bars": steelBar,
  "binding-wire": bindingWire,
  "wire-mesh": weldedWireMesh,
  "mortice-door-lock": doorLock,
  "door-handles": doorHandle,
  "door-hinges": doorHinge,
  "ceramic-floor-tiles": tiles,
  "wall-tiles": wallTiles,
  "tile-cement": tileCement,
  "pvc-pipes": pvcPipe,
  "pvc-fittings": pvcElbowFitting,
  "gate-valves": gateValves,
  "self-tapping-screws": selfTappingScrew,
  "barbed-wire": barbedWire,
  padlocks,
};

export const categoryImages: Record<string, StaticImageData> = {
  "building-materials": cement,
  roofing: ironSheet,
  plumbing,
  electrical: electricCable,
  paints,
  "tools-equipment": tools,
  "timber-wood": timber,
  "steel-metal": steelAndMetal,
  "doors-windows": doorsAndWindows,
  "tiles-flooring": tiles,
  "pipes-fittings": pvcPipe,
  "general-hardware": generalHardware,
};

export const getProductImage = (slug: string) => productImages[slug];

export const getCategoryImage = (slug: string) => categoryImages[slug];
