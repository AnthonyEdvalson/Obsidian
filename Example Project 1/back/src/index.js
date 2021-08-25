import { runServer } from 'obsidian';
import oPack from './generated/_opackx';
import { performance } from 'perf_hooks';
import express from 'express';
import socketIO from 'socket.io';

let highPrecisionTime = () => performance.timeOrigin + performance.now();
oPack.setEditorProfiler(highPrecisionTime, () => {});

runServer(express, socketIO, oPack);
