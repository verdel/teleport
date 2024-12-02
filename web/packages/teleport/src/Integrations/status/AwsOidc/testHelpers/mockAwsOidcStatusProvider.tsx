/**
 * Teleport
 * Copyright (C) 2024 Gravitational, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';

import { MemoryRouter } from 'react-router';

import {
  awsOidcStatusContext,
  AwsOidcStatusContextState,
} from 'teleport/Integrations/status/AwsOidc/useAwsOidcStatus';
import { ContextProvider } from 'teleport';
import { createTeleportContext } from 'teleport/mocks/contexts';

export const MockAwsOidcStatusProvider = ({
  children,
  value,
}: {
  children?: React.ReactNode;
  value: AwsOidcStatusContextState;
}) => {
  const ctx = createTeleportContext();

  return (
    <MemoryRouter>
      <ContextProvider ctx={ctx}>
        <awsOidcStatusContext.Provider value={value}>
          {children}
        </awsOidcStatusContext.Provider>
      </ContextProvider>
    </MemoryRouter>
  );
};