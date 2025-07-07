import { funcaoValidacao } from '$lib/server/funcaoValidacao';
import { prismaClient } from '$lib/server/prismaClient';
import type { Action } from './$types';
import { schema } from './schema.server';

export const actionCriar: Action = async function ({ request }) {
	const validation = await funcaoValidacao({
		request,
		schema,
	});

	if (validation.valid === false) {
		return validation.fail;
	}

	await prismaClient.tabelaUsuarios.create({
		data: validation.data,
	});
};
